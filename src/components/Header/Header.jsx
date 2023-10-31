import logo from "../../assets/images/logo.png";
import "./Header.scss";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header className='header-container'>
            <img className='header-logo' src={logo} alt='logo'/>
            <div className='header-info-container'>
                <Link className='header-link' to='https://itgirlschool.com/'>itgirlschool.com</Link>
                <p className='header-text'>Нас уже 600+ учениц</p>
            </div>

        </header>
    )
}
export default Header;