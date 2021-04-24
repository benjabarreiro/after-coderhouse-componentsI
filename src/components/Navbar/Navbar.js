import './Navbar.css';
import basket from '../../img/svg/basket.svg';

export const Navbar = (props) => {
    const handleClick = () => {
        alert(`Hola ${props.user.name}`);
    }
    return (
        <header className="navbar">
            <img className="logo" src="" alt="Logo"/>
            <nav className="links">
                <ul className="links-list">
                    <li className="links-link">{props.navigation[0]}</li>
                    <li className="links-link">{props.navigation[1]}</li>
                    <li className="links-link">{props.navigation[2]}</li>
                    <li className="links-link">{props.navigation[3]}</li>
                </ul>
            </nav>
            <div className="right">
                <input className="search" type="text" placeholder="Search"/>
                <span className="cart">
                    <img className="cart-icon" src={basket} alt="Cart"/>
                    <p className="cart-quantity">{props.cartQuantity}</p>
                </span>
                <img className="avatar" src={props.user.avatar} alt="User" onClick={handleClick}/>
            </div>
        </header>
    )
}