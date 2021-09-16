import './App.css';
import Game from './components/Game';
import Rules from './components/Rules';
import { useSelector, useDispatch } from 'react-redux';
import { loadResult } from './actions';
function App() {
  const dispatch = useDispatch()
  const openPopUp = useSelector(state => state.popUpReducer)
  const result = useSelector(state => state.winsReducer);

  window.onbeforeunload = function () {
    localStorage.setItem("result", result);
  }


  window.onload = function () {
    const data = localStorage.getItem("result");
    if (data) {
      dispatch(loadResult(parseInt(data)))
    }
  }

  return (
    <div className="App">
      <Game />
      {openPopUp && (<Rules />)}
    </div>
  );
}

export default App;
