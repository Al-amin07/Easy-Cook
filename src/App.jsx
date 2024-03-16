
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Items from './Components/Items';

function App() {
  

  return (
    <div className='container mx-auto px-2 my-8'>
     
      <Navbar></Navbar>
      <Banner></Banner>
      <Items ></Items>
      
    </div>
  )
}

export default App
