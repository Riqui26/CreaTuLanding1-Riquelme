import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemsListContianer/ItemList'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos, Futuro Catalogo'}/>
    </div>
  )
}

export default App;