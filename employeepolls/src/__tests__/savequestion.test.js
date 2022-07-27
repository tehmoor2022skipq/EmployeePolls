import { _saveQuestion } from '../utils/_DATA'

describe('Test on _saveQuestion', () => {
    it('will return the saved question when correct inputs are passed', async () => {
        const q = {
            optionOneText: 'context1',
            optionTwoText: 'context2',
            author: 'zoshikanlu'
        }
        const result = await _saveQuestion(q)
        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('author')
        expect(result).toHaveProperty('timestamp')
        expect(result).toHaveProperty('optionOne')
        expect(result).toHaveProperty('optionTwo')
    })

    it('will return error when incorrect or incomplete fields are passed', async () => {
        const q = {
            optionOneText: 'JustOptionOne',
            author: 'mtsamis'
        }
        await expect(_saveQuestion(q)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author')
    })
})