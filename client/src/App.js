import './App.css';
import Review from './components/review/review';
import Navbar from './components/navbar/navbar';


function App() {

  const title = "Movie title"

  return (
    <div className="App">

      <main>
        <Navbar />
        <Review title={title}/>
      </main>
    </div>
  );
}

export default App;
