import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Header from './components/header'



function App() {
  return (
    <>
      <div>
       <Header />
       <ItemListContainer  greeting={"Productos no disponibles, vuelva mas tarde."}/>

      </div>
      
      
    
      
    </>
  )
}

export default App
