import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

function QuestionComp({ title, ids, questions }) {
  return (
    <div className='listContainer'>

      <div className='listTitle'>{title}</div>
      <div className='listQuestions'>
        {ids && ids.map(q => (
          <div key={q}>
            <Question id={q} />
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ questions }) => (
  {
    questions: questions
  }
)

export default connect(mapStateToProps)(QuestionComp)