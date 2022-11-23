import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Post from './components/Post'
import HiveConnect from './components/HiveConnect';
import Event from './components/Event'
import Form from './components/Form'

function App() {

  const hiveID = "hive-173115"
  


  return (
    <div className="App">
      <h1> Skatehive Post Tool </h1>
      <p> This is {hiveID}</p>
      < HelloWorld/>
      < Post 
        title= "title input"
      />
      <Form/>
      < Event/>
      < HiveConnect/> 

    </div>
    
  );
}

export default App;
