import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'

function CreatePoll({ dispatch, userAuth }) {
    const navigate = useNavigate()

    const [firstOption, setfirstOption] = useState('')
    const [secondOption, setsecondOption] = useState('')

    useEffect(() => {
        !userAuth && navigate('/login')
    }, [userAuth, navigate])

    function handleSubmit(e) {
        e.preventDefault()
        const question = {
            optionOneText: firstOption,
            optionTwoText: secondOption,
            author: userAuth
        }
        dispatch(handleAddQuestion(question))
        setfirstOption('')
        setsecondOption('')
        navigate('/')
    }

    return (userAuth && <>
        <div>
            <h2>Would You Rather</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label>First Option</label>

                <input type="text"
                    placeholder='Enter First Option'
                    value={firstOption}
                    className='formStyle'
                    onChange={(e) => setfirstOption(e.target.value)}
                />

                <label>Second Option</label>

                <input type="text"
                    placeholder='Enter Second Option'
                    value={secondOption}
                    className='formStyle'
                    onChange={(e) => setsecondOption(e.target.value)}
                />
                {/* To Make Sure there is text inside input fields */}

                {firstOption && secondOption ? (<input type="submit" />) : (<input type="submit" disabled />)}
            </form>
        </div>
    </>
    )
}

const mapStateToProps = ({ userAuth }) => ({
    userAuth,
})

export default connect(mapStateToProps)(CreatePoll)