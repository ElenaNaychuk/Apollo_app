import {Link} from "react-router-dom";
import telegramIcon from '../../assets/images/icon-telegram-app.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import vkIcon from '../../assets/images/icon-vk.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';
import "./Footer.scss";

const Footer = () =>{
    return(
        <footer className='footer-container'>
            <div className='footer-info'>© 2023 <br/>
                ITGIRLSCHOOL <br/>
                Школа IT-профессий <br/>
                для девушек
            </div>
            <div className='footer-contacts'>
                <div className='footer-icons'>
                    <Link to='https://t.me/+rqyYsLbObxoyNzFi'>
                        <img className='footer-icon' src={telegramIcon}/>
                    </Link>
                    <Link to='https://www.facebook.com/itgirlschool'>
                        <img className='footer-icon' src={facebookIcon}/>
                    </Link>
                    <Link to='https://www.instagram.com/itgirlschool'>
                        <img className='footer-icon' src={instagramIcon}/>
                    </Link>
                    <Link to='https://vk.com/itgirlschool'>
                        <img className='footer-icon' src={vkIcon}/>
                    </Link>
                    <Link to='https://www.youtube.com/@itgirlschool'>
                        <img className='footer-icon' src={youtubeIcon}/>
                    </Link>
                </div>
                <Link className='footer-link' to='https://t.me/itgirlschool'>https://t.me/itgirlschool</Link>
                <Link className='footer-link' to='https://itgirlschool.com/'>itgirlschool.com</Link>
            </div>
            <div className='footer-license'>
                <p>Образовательная лицензия <br/>
                    №Л035-01224-40/00646358
                </p>
                <p>ОГРНИП 312774604000333  <br/>
                    ИНН 772155768427
                </p>
            </div>
        </footer>
    )
}
export default Footer;