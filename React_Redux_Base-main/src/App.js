//Головной компонент
import {useSelector} from 'react-redux';
import './App.css';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './Spin';

function App() {
  const error = useSelector(state => {
    return state.appReducer.error;
  });
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="./img2.jpg" alt="football"/>
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
