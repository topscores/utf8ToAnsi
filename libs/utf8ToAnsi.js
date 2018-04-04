export const charToByte = c => {
  return c.charCodeAt(0) < 128
    ? c.charCodeAt(0) // This is english alphabet
    : c.charCodeAt(0) - 0x0e01 /* Utf8 ก */ + 161 /* Window-874 ก*/
}
export const toByteArray = s => {
  return s.split('').map(c => charToByte(c))
}
export const utf8ToAnsi = s => {
  return toByteArray(s)
    .map(c => String.fromCharCode(c))
    .reduce((converted, c) => converted + c)
}
