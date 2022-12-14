import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
			<NavLink to="/" className="header__home-link link">
				<img src="assets/images/spotify-logo.png" alt="spotify logo" height="36" />
				<h1 className="header__title cloni">Clonify</h1>
			</NavLink>
			<div className="header__right-wrap">
				<form className="header__search-form">
					<input className="header__search" type="text" placeholder="Исполнитель, трек или подкаст" />
					<button className="header__search-btn btn"></button>
				</form> 
				<NavLink to="/" className="header__user-link link">
					<i className="fa fa-user-circle"></i>
				</NavLink>
			</div>
		</header>
    );
}

export default Header;