import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import HiveConnect from './components/HiveConnect';
import Event from './components/Event'
import Form from './components/Form'
import Condition from './components/Condition'
import List from './components/List';

function App() {

  const hiveID = "hive-173115"
  
  const items = [ 'React' , 'vue' , ' angular']



  return (
    <div className="App">
      <h1 className='App-logo'> Skatehive Post Tool </h1>
      <p> This is {hiveID}</p>
      < HelloWorld/>
      < Form/>
      < Event/>
      < HiveConnect/> 
      < Condition/>
      < List itens = {items} />

    </div>
    
  );
}

export default App;
