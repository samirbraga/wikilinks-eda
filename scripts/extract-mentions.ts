import fs from 'fs'
import { Parser } from 'json2csv'
import { WikiLinkItem } from './definitions/WikiLinkItem'

const dataBasePath = './json/'

for (let i = 1; i <= 109; i++) {
    const filename = i.toString().padStart(3, "0")
    const rawData = fs.readFileSync(`${dataBasePath}${filename}.json`, 'utf-8')
    const jsonData = <[WikiLinkItem]>JSON.parse(rawData)
    const mentions = jsonData
        .flatMap(record => record.mentions ?? [])
        .filter(mention => Boolean(mention.context))
        
    const parser = new Parser({
        fields: ['wiki_url', 'anchor_text', 'raw_text_offset', 'context.left', 'context.middle', 'context.right', 'freebase_id']
    })
    const csv = parser.parse(mentions)
    fs.writeFileSync(`./mentions/${filename}.csv`, csv)
    console.log(`Mentions from ${filename} extracted.`)
}
