/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as PageContentItem from "./PageContentItem";
import * as RareWord from "./RareWord";
import * as Mention from "./Mention";
export interface IWikiLinkItemArgs {
    doc_id?: number;
    url?: string;
    content?: PageContentItem.PageContentItem;
    rare_words?: Array<RareWord.RareWord>;
    mentions?: Array<Mention.Mention>;
}
export class WikiLinkItem {
    public doc_id?: number;
    public url?: string;
    public content?: PageContentItem.PageContentItem;
    public rare_words?: Array<RareWord.RareWord>;
    public mentions?: Array<Mention.Mention>;
    constructor(args?: IWikiLinkItemArgs) {
        if (args != null && args.doc_id != null) {
            this.doc_id = args.doc_id;
        }
        if (args != null && args.url != null) {
            this.url = args.url;
        }
        if (args != null && args.content != null) {
            this.content = args.content;
        }
        if (args != null && args.rare_words != null) {
            this.rare_words = args.rare_words;
        }
        if (args != null && args.mentions != null) {
            this.mentions = args.mentions;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("WikiLinkItem");
        if (this.doc_id != null) {
            output.writeFieldBegin("doc_id", thrift.Thrift.Type.I32, 1);
            output.writeI32(this.doc_id);
            output.writeFieldEnd();
        }
        if (this.url != null) {
            output.writeFieldBegin("url", thrift.Thrift.Type.STRING, 2);
            output.writeString(this.url);
            output.writeFieldEnd();
        }
        if (this.content != null) {
            output.writeFieldBegin("content", thrift.Thrift.Type.STRUCT, 3);
            this.content.write(output);
            output.writeFieldEnd();
        }
        if (this.rare_words != null) {
            output.writeFieldBegin("rare_words", thrift.Thrift.Type.LIST, 4);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.rare_words.length);
            this.rare_words.forEach((value_1: RareWord.RareWord): void => {
                value_1.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (this.mentions != null) {
            output.writeFieldBegin("mentions", thrift.Thrift.Type.LIST, 5);
            output.writeListBegin(thrift.Thrift.Type.STRUCT, this.mentions.length);
            this.mentions.forEach((value_2: Mention.Mention): void => {
                value_2.write(output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): WikiLinkItem {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.TField = input.readFieldBegin();
            const fieldType: thrift.Thrift.Type = ret.ftype;
            const fieldId: number = ret.fid;
            if (fieldType === thrift.Thrift.Type.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_3: number = input.readI32();
                        _args.doc_id = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_4: string = input.readString();
                        _args.url = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_5: PageContentItem.PageContentItem = PageContentItem.PageContentItem.read(input);
                        _args.content = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_6: Array<RareWord.RareWord> = new Array<RareWord.RareWord>();
                        const metadata_1: thrift.TList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_7: RareWord.RareWord = RareWord.RareWord.read(input);
                            value_6.push(value_7);
                        }
                        input.readListEnd();
                        _args.rare_words = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.Thrift.Type.LIST) {
                        const value_8: Array<Mention.Mention> = new Array<Mention.Mention>();
                        const metadata_2: thrift.TList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_9: Mention.Mention = Mention.Mention.read(input);
                            value_8.push(value_9);
                        }
                        input.readListEnd();
                        _args.mentions = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return new WikiLinkItem(_args);
    }
}
