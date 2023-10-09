// import logo from './logo.svg';
import './App.css';
import HelloWord from './Components/HelloWord';
import Onclick from './Components/Onclick';
import Counter from './Components/Counter';

function Car(props) {
  return (
    <div>{ props.brand}</div>
  )
}


function App() {
  const carName = "Ford";
  return (
    <>
       <Car  brand={ carName }  />
       <Counter />
       <Onclick />
      <HelloWord />
    </>
  );
}

export default App;
