# utf8ToAnsi

A utility to convert utf8 string to ansi windows-874

## Installation

`yarn add utf8ToAnsi` or `npm install utf8ToAnsi`

## Example

```
import { utf8ToAnsi } from 'utf8ToAnsi'

const utf8 = 'สวัสดีชาวโลก'
const ansi = utf8ToAnsi(utf8)
console.log(ansi)
```
