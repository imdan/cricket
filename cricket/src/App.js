import './App.css';
import Board from './Board';
import Player from './Player.js'

function App() {

  let playerOne = new Player('Dan')
  let playerTwo =  new Player('Guy')

  return (
    <div className="App">
        <Board playerOne={playerOne} playerTwo={playerTwo}/>
    </div>
  );
}

export default App;
