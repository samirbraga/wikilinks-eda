/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IRareWordArgs {
    word?: string;
    offset?: number;
}
export class RareWord {
    public word?: string;
    public offset?: number;
    constructor(args?: IRareWordArgs) {
        if (args != null && args.word != null) {
            this.word = args.word;
        }
        if (args != null && args.offset != null) {
            this.offset = args.offset;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("RareWord");
        if (this.word != null) {
            output.writeFieldBegin("word", thrift.Thrift.Type.STRING, 1);
            output.writeString(this.word);
            output.writeFieldEnd();
        }
        if (this.offset != null) {
            output.writeFieldBegin("offset", thrift.Thrift.Type.I32, 2);
            output.writeI32(this.offset);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): RareWord {
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
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_1: string = input.readString();
                        _args.word = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.I32) {
                        const value_2: number = input.readI32();
                        _args.offset = value_2;
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
        return new RareWord(_args);
    }
}
