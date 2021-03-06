import { transformConsoleMessagesToExceptions } from './testUtils'

describe('testUtils', () => {
  describe('transformConsoleMessagesToExceptions', () => {
    beforeEach(() => transformConsoleMessagesToExceptions())

    it('should throw if console.warn is called', () => {
      // tslint:disable-next-line no-console
      expect(() => console.warn('should throw')).toThrow('should throw')
    })

    it('should throw if console.error is called', () => {
      // tslint:disable-next-line no-console
      expect(() => console.error('should throw')).toThrow('should throw')
    })

    it("should not throw if console.error is called with react's complimentary error", () => {
      // tslint:disable-next-line no-console
      expect(() =>
        console.error(new Error('The above error occurred in the')),
      ).not.toThrow('The above error occurred in the')
    })
  })
})
