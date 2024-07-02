import './App.css';
import Header from './components/header.jsx';

function App() {
  const tasks = [
    { id: 1, text: "Exemplo1" },
    { id: 2, text: "Exemplo2" },
    { id: 3, text: "Exemplo3" }
  ];
  return (
    <div className="App">
      <Header content={tasks}/>
    </div>
  );
}


export default App;
