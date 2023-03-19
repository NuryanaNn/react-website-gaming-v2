import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/logo.png'


const Navbar =()=>{
    return(
        <div className="Navbars">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="navigation1">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sandbox</a></li>
                    <li><a href="#">Shooter</a></li>
                    <li><a href="#">Puzzles</a></li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </div>
            <div className="navigation2">
            <ul>
                <li><a href=""><FontAwesomeIcon icon={faSearch} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faUser} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faShoppingCart} /></a></li>
            </ul>
            </div>
        </div>



    )
}

export default Navbar