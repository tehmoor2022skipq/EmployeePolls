import '../App.css';
import { connect } from 'react-redux'
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { handleData } from '../actions/shared'
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import CreatePoll from './CreatePoll';
import Poll from './Poll';
import Navbar from './Navbar';
import Login from './Login';
import PageNotFound from './PageNotFound';

function App({ dispatch, userAuth }) {

  useEffect(() => {
    dispatch(handleData())
  }, [dispatch])

  return (<>
    <Router>
      {userAuth && <Navbar />}
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/add" element={<CreatePoll />} />
          <Route exact path="/questions/:question_id" element={<Poll />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

const mapStateToProps = ({ questions, userAuth }) => ({
  questions: questions,
  userAuth,
});


export default connect(mapStateToProps)(App);
