import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import QuestionComp from './QuestionComp'

function Dashboard({ doneQuestions, newQuestions, authedUser }) {
    const navigate = useNavigate()
    const [toggle, settoggle] = useState('NewQuestion');
    const quest = [
        {
            key: 'newQ',
            title: 'New Questions',
            ids: newQuestions
        },
        {
            key: 'done',
            title: 'Done Questions',
            ids: doneQuestions
        }
    ]

    useEffect(() => {
        !authedUser && navigate('/login')
    }, [authedUser, navigate])

    return (
        <div>
            <label>Type of Questions</label><br></br>
            <select value={toggle} onChange={(e) => settoggle(e.target.value)}>
                <option value='NewQuestion'>
                    New Questions
                </option>
                <option value='Done'>
                    Done
                </option>

            </select>
            {toggle === 'NewQuestion' && <div>
                <QuestionComp title={quest[0].title} ids={quest[0].ids} />
            </div>}
            {toggle === 'Done' && <div>

                <QuestionComp title={quest[1].title} ids={quest[1].ids} />
            </div>}
        </div>
    )
}


const mapStateToProps = ({ questions, userAuth, users }) => {
    if (userAuth) return {
        doneQuestions: Object.keys(questions).filter(k => Object.keys(users[userAuth].answers).includes(k)).sort(
            (a, b) => questions[b].timestamp - questions[a].timestamp
        ),
        newQuestions: Object.keys(questions).filter(k => !Object.keys(users[userAuth].answers).includes(k)).sort(
            (a, b) => questions[b].timestamp - questions[a].timestamp
        ),
        authedUser: users[userAuth],
    }
    else {
        return {}
    }
}

export default connect(mapStateToProps)(Dashboard)