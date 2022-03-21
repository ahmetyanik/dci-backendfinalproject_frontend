import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

// api adress: https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=a7ccf39f58624360e151dce17c818ef3

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
    </div>
  );
}

export default App;
