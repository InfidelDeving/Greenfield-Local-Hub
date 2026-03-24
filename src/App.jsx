import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routing from './Routing'
function App() {


  return (
    <>
    <div className='flex-wrapper'>
      <Header/>
      <Routing/>
      <Footer/>
    </div>
    </>
  )
}

export default App
