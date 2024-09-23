import CardsWidget from '../CardWidget/CardsWidget';
import './NavBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {

  return (

    <nav>
      <a href=""><img src="logo.png" alt="Logo de la tienda" className="logo" /></a>
      <div>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Contacto</button>
        <button> <FontAwesomeIcon icon={faCartShopping}/> </button>
      </div>  
      <CardsWidget />
    </nav>
  );
};

export default NavBar;