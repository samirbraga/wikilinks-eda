import fs from 'fs'
import { WikiLinkItem } from './definitions/WikiLinkItem'

const dataBasePath = './json/'

let totalRecordsCount = 0
let totalMentionsCount = 0
let totalRareWordsCount = 0
for (let i = 1; i <= 109; i++) {
    const filename = i.toString().padStart(3, "0")
    const filepath = `${dataBasePath}${filename}.json`
    const rawData = fs.readFileSync(filepath, 'utf-8')
    const jsonData = <[WikiLinkItem]>JSON.parse(rawData)
    const recordsCount = jsonData.length
    const mentionsCount = jsonData.reduce((count, record) => count + (record.mentions?.length ?? 0), 0)
    const rareWordsCount = jsonData.reduce((count, record) => count + (record.rare_words?.length ?? 0), 0)
    totalRecordsCount += recordsCount
    totalMentionsCount += mentionsCount
    totalRareWordsCount += rareWordsCount
    console.log(`File ${filename} has ${jsonData.length} records, ${mentionsCount} mentions and ${rareWordsCount} rare words.`)
}

console.log(`
Total of records: ${totalRecordsCount}.
Total of mentions: ${totalMentionsCount}.
Total of rare words: ${totalRareWordsCount}.`
)
