import { TFramedTransport, TBinaryProtocol } from 'thrift'
import fs from 'fs'
import { WikiLinkItem } from './definitions/WikiLinkItem'

function deserializeThrift(data: Buffer, thriftModel: any): any {
    const tTransport = new TFramedTransport(data)
    const tProtocol = new TBinaryProtocol(tTransport)

    const list = tProtocol.readListBegin()
    const result = []
    
    for (let i = 0; i < list.size; i++) {
        let model;
        try {
            model = thriftModel.read(tProtocol)
        } catch (e) { }

        if (model) {
            result.push(model)
        }
    }
    tProtocol.readListEnd()
    return result
}


const dataBasePath = '../dataset/'

for (let i = 1; i <= 109; i++) {
    const filename = i.toString().padStart(3, "0")
    const rawData = fs.readFileSync(dataBasePath + filename)
    const deserializedData = <[WikiLinkItem]>deserializeThrift(rawData, WikiLinkItem)
    const jsonData = JSON.stringify(deserializedData)
    fs.writeFileSync(`./json/${filename}.json`, jsonData)
    console.log(`File ${filename} converted.`)
}
