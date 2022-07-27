import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuthUser } from '../actions/userAuth'

function Login({ dispatch, userAuth, users }) {

    const [user, setUser] = useState('Select')

    const navigate = useNavigate()
    useEffect(() => {
        userAuth && navigate(-1)
    }, [userAuth, navigate])


    function handleLoginBtn() {
        dispatch(setAuthUser(user))
    }

    return (
        <div>
            <h1>Please Select user to login</h1>
            <select value={user}
                data-testid='dropdown'
                onChange={(e) => setUser(e.target.value)}
            >
                <option>
                    Select User
                </option>
                {Object.keys(users).map(user => (
                    <option key={'login' + users[user].id} value={users[user].id} >
                        {users[user].name} ({users[user].id})
                    </option>
                ))}
            </select>
            {user !== "Select" && user !== "Select User" &&
                <button data-testid="login" onClick={handleLoginBtn}>Login</button>}
        </div>
    )
}

const mapStateToProps = ({ userAuth, users }) => {
    return {
        userAuth,
        users
    }
}


export default connect(mapStateToProps)(Login)