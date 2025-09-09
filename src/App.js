
import './App.css';
import GreetUser from './component/GreetUser';

function App() {
  return (
    <div className="App">
    
               <GreetUser greet={"good Morning"}/>
                 <GreetUser greet={"good afternoon"}/>
                   <GreetUser greet={"good evening"}/>

    </div>
  );
}

export default App;
