import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ItemCard from './components/ItemCard/ItemCard'
import strawberry from "./assets/strawberry.png"
function App() {


  return (
    <>
    <div className='flex-wrapper'>
      <Header/>
      <ItemCard
        image={strawberry}
        name="Strawberry"
        price="2.10"
        weight={300}
        stock={999}
      />
      <ItemCard
        image={strawberry}
        name="Strawberry"
        price="2.10"
        weight={300}
        stock={999}
      />
      <Footer/>
    </div>
    </>
  )
}

export default App
