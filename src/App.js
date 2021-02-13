import logo from './logo.svg';
import './App.css';

let i =2;
let myCSS ={
  fonSize: 48,
  color: '#FF0000'
}

function App() {
  return (
    <div>
     <h1 style = {myCSS}> Hello React</h1> 
     <h2>test</h2>
     <p data-myattribute ="value">teaast</p>
     <div className="red">ZasdasdZ</div>
     <h1>{1+1}</h1>
     <p>{i ==2?'True' : 'False'}</p>
     {/* test comment*/}
    </div>
  );
}

export default App;
