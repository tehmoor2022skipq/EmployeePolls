import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function PageNotFound({ userAuth }) {
  const navigate = useNavigate()

  useEffect(() => {
    !userAuth && navigate('/login')
  }, [userAuth, navigate])

  return (
    <>
      <h1 style={{ color: 'red', fontWeight: 'bold' }}>404 Page not Found</h1>
      {console.log("Page Not Found")}
    </>
  )
}
const mapStateToProps = ({ userAuth }) => ({
  userAuth
})

export default connect(mapStateToProps)(PageNotFound)