# utf8ToAnsi

A utility to convert utf8 string to ansi windows-874

## Installation

`yarn add utf8-to-ansi` or `npm install utf8-to-ansi`

## Example

To get ansi string from utf8 string

```
import { utf8ToAnsi } from 'utf8-to-ansi'

const utf8 = 'สวัสดีชาวโลก'
const ansi = utf8ToAnsi(utf8)
console.log(ansi)
```

To get byte array from utf8 string

```
import { toByteArray } from 'utf8-to-ansi'

const buffer = new Buffer.from(toByteArray('ทดสอบ สมมุติ'))
console.log(buffer.toString('latin1'))
```
