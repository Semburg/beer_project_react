import icon from './img/iconfinder_Home-01_1976053.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <section className="header_style" style ={{textAlign: 'center'}}>
            <Link to = "/">
            <div id="header_button">
                <img src={icon} alt="icon"/>
            </div>
            </Link>
        </section>
     );
}
 
export default Header;