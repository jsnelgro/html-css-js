import { doSomethingGreat } from './some-module'

describe('main tests', () => {
  test('does something great!', () => {
    expect(doSomethingGreat()).toBeTruthy()
    expect(doSomethingGreat(false)).toBeFalsy()
  })
})
