export const SAVE_ANSWER_QUEST = 'SAVE_ANSWER_QUEST'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"

export function saveAnswerQuestion({ authedUser, qid, answer }) {
    return {
        type: SAVE_ANSWER_QUEST,
        authedUser,
        qid,
        answer
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

