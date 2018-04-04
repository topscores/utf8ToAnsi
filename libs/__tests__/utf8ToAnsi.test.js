import { charToByte, toByteArray, utf8ToAnsi } from '../utf8ToAnsi'

describe('utf8ToAnsi', () => {
  describe('charToByte', () => {
    it('Returns ascii code for english character', () => {
      const c1 = 'A'
      const c2 = 'z'

      expect(charToByte(c1)).toEqual(65)
      expect(charToByte(c2)).toEqual(122)
    })
    it('Returns ascii code for thai character', () => {
      const c1 = 'ก'
      const c2 = 'ฮ'

      expect(charToByte(c1)).toEqual(161)
      expect(charToByte(c2)).toEqual(206)
    })
  })
  describe('toByteArray', () => {
    it('Converts english string to byte array', () => {
      const s = 'Hello, world'

      expect(toByteArray(s)).toEqual([
        72,
        101,
        108,
        108,
        111,
        44,
        32,
        119,
        111,
        114,
        108,
        100,
      ])
    })
    it('Converts thai string to byte array', () => {
      const s = 'สวัสดีชาวโลก'

      expect(toByteArray(s)).toEqual([
        202,
        199,
        209,
        202,
        180,
        213,
        170,
        210,
        199,
        226,
        197,
        161,
      ])
    })
  })
  describe('utf8ToAnsi', () => {
    it('Correctly converts english string', () => {
      const s = 'Hello, worlds'

      expect(utf8ToAnsi(s)).toEqual('Hello, worlds')
    })
    it('Correctly converts thai character', () => {
      const s = 'สวัสดีชาวโลก'

      expect(utf8ToAnsi(s)).toEqual('ÊÇÑÊ´ÕªÒÇâÅ¡')
    })
    it('Correctly converts mixed character', () => {
      const s = 'Hello, ชาวโลก'

      expect(utf8ToAnsi(s)).toEqual('Hello, ªÒÇâÅ¡')
    })
  })
})
