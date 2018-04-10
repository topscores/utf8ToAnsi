import { utf8ToAnsi, toByteArray } from './libs/utf8ToAnsi'

const buffer = new Buffer.from(toByteArray('ทดสอบ สมมุติ'))
console.log(buffer.toString('latin1'))
