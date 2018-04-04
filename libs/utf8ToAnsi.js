export const convertOneCharacter = c => {
  return c.charCodeAt(0) < 128
    ? c // This is english alphabet
    : String.fromCharCode(
        c.charCodeAt(0) - 0x0e01 /* Utf8 ก */ + 161 /* Window-874 ก*/
      )
}

export const utf8ToAnsi = s => {
  return s
    .split('')
    .map(c => convertOneCharacter(c))
    .reduce((converted, c) => converted + c)
}
