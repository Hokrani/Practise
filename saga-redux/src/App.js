import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {getUserFetch} from './actions';

function App() {
  const dispatch=useDispatch();
  const users=useSelector(state=>state.myFirstReducer.users);

  return (
    <div className="App"> 
        <button onClick={()=>dispatch(getUserFetch())}>Get users</button>
        <div> Users: {users.map(user=><div>{user.name}</div>)}</div>
      
    </div>
  );
}

export default App;
