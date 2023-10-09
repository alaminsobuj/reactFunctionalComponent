// import logo from './logo.svg';
import './App.css';
import HelloWord from './Components/HelloWord';
import Onclick from './Components/Onclick';
import Counter from './Components/Counter';
import Conditional from './Components/Conditional';
import ListShow from './Components/ListShow';
import FromView from './Components/FromView';

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
      <Conditional isGoal={true} />
      <ListShow />
      <FromView />
    </>
  );
}

export default App;
