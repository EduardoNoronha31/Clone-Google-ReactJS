import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <Header />
          </div>
          <div className="col-12">
            <Body />
          </div>
        </div>
      
      </div>
     
    </div>
  );
}

export default App;
