import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Leaderboard({ users, sortedData, userAuth }) {
    const navigate = useNavigate()
    useEffect(() => {
        !userAuth && navigate('/login')
    }, [userAuth, navigate])
    return (
        users &&
        <>
            <div className='leaderboard'>
                {
                    <table id='leaderbordResults'>

                        <thead>
                            <tr key='thead'>
                                <td data-testid='Users'>Users</td>
                                <td data-testid='Answered'>Answered</td>
                                <td data-testid='Created'>Created</td>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((uid) => (
                                <tr key={users[uid].name}>
                                    <td> {users[uid].name}</td>
                                    <td> {Object.keys(users[uid].answers).length}</td>
                                    <td> {Object.keys(users[uid].questions).length}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}

const mapStateToProps = ({ users, userAuth }) => (
    {
        sortedData: Object.keys(users).sort(
            (a, b) => {
                const _b = Object.keys(users[b].answers).length + Object.keys(users[b].questions).length
                const _a = Object.keys(users[a].answers).length + Object.keys(users[a].questions).length
                return _b - _a
            }
        ),
        users: users,
        userAuth,
    }
)

export default connect(mapStateToProps)(Leaderboard)