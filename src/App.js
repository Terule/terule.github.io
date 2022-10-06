import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <HeaderComponent />
      <main className='main'>
        <Home /> 
      </main>
    </>
  );
}

export default App;
