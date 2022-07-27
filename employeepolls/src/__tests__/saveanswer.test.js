import { _saveQuestionAnswer } from '../utils/_DATA'

describe('Test on _saveQuestionAnswer', () => {
    it('will return true when correct data is passed', async () => {
        const data = {
            authedUser: 'sarahedo',
            qid: 'vthrdm985a262al8qx3do',
            answer: 'optionTwo'
        }
        const result = await _saveQuestionAnswer(data)
        expect(result).toEqual(true)
    })

    it('will return error when incorrect data is passed', async () => {
        const data = {
            rand: 'Random'
        }
        await expect(_saveQuestionAnswer(data)).rejects.toEqual('Please provide authedUser, qid, and answer')
    })
})