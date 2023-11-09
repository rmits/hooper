import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Filters from './components/Filters';

function App() {

  return (
    <>
      <Header />
      <div className="app">
        <div className='filterBar'>
          <Filters />
        </div>
        <div className='main'>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
