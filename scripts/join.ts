import fs from 'fs'
import { WikiLinkItem } from './definitions/WikiLinkItem'

const dataBasePath = './json/'

let joinedData: WikiLinkItem[] = []
for (let i = 1; i <= 109; i++) {
    const filename = i.toString().padStart(3, "0")
    const filepath = `${dataBasePath}${filename}.json`
    const rawData = fs.readFileSync(filepath, 'utf-8')
    const jsonData = <[WikiLinkItem]>JSON.parse(rawData)
    joinedData = joinedData.concat(jsonData)
    console.log(`File ${filename} joined.`)
}

fs.writeFileSync('./fulldata.json', JSON.stringify(joinedData))
