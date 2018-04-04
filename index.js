import { utf8ToAnsi, toByteArray } from './libs/utf8ToAnsi'

const buffer = new Buffer(utf8ToAnsi('สวัสดี'), 'ascii')
console.log(buffer[1])
