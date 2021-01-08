import './App.css';
import Review from './components/review/review';
import Navbar from './components/navbar.js';


function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        
        <Review />
      </main>
    </div>
  );
}

export default App;
