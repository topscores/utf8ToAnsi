import { convertOneCharacter, utf8ToAnsi } from '../utf8ToAnsi'

describe('utf8ToAnsi', () => {
  describe('convertOneCharacter', () => {
    it('Returns same character for english character', () => {
      const c1 = 'A'
      const c2 = 'z'

      expect(convertOneCharacter(c1)).toEqual('A')
      expect(convertOneCharacter(c2)).toEqual('z')
    })
    it('Returns windows-874 character for thai character', () => {
      const c1 = 'ก'
      const c2 = 'ฮ'

      expect(convertOneCharacter(c1)).toEqual(String.fromCharCode(161))
      expect(convertOneCharacter(c2)).toEqual(String.fromCharCode(206))
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
