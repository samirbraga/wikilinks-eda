import fs from 'fs'
import { WikiLinkItem } from './definitions/WikiLinkItem'

const dataBasePath = './json/'

for (let i = 1; i <= 109; i++) {
    const filename = i.toString().padStart(3, "0")
    const filepath = `${dataBasePath}${filename}.json`
    const rawData = fs.readFileSync(filepath, 'utf-8')
    const jsonData = <[WikiLinkItem]>JSON.parse(rawData)
    const preprocessedData = jsonData.filter(record =>
        (record.mentions && record.mentions.length > 0) ||
        (record.rare_words && record.rare_words.length > 0)
    )
    fs.writeFileSync(filepath, JSON.stringify(preprocessedData))
    console.log(`File ${filename} preprocessed.`)
}
