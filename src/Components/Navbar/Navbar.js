import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import styles from './Navbar.module.scss';
import { prepareComponent } from './helpers';

import CircleButton from '../Buttons/CircleButton/CircleButton';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';

// - Hamburger Menu Icon
import { ReactComponent as HamburgerMenuDarkTheme } from './SVG/HamburgerMenu/HamburgerIconDarkTheme.svg';
import { ReactComponent as HamburgerMenuLightTheme } from './SVG/HamburgerMenu/HamburgerIconLightTheme.svg';
import { ReactComponent as HamburgerMenuHighlighted } from './SVG/HamburgerMenu/HamburgerIconHighlighted.svg';

// - Home Icon
import HomeIconDarkTheme from './SVG/HomeIcon/HomeIconDarkTheme';
import HomeIconLightTheme from './SVG/HomeIcon/HomeIconLightTheme';
import HomeIconHighlighted from './SVG/HomeIcon/HomeIconHighlighted';

class Navbar extends React.Component {

	// - Once this depends on redux state, the menu and x icon button will sync up
	// 	 to clicking the backdrop to close the menu. 
	state = {
		menuActive: false
	};

	static propTypes = {
		onSideMenuButtonClick: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired		
	};

	handleSideMenuButtonClick = () => {
		this.props.onSideMenuButtonClick();
	};

	render() {

		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.navbarClasses }>
				<div className={ initObject.sideMenuButtonClasses }>
					<CircleButton 
						size='20px'
						darkTheme={ <HamburgerMenuDarkTheme/> }
						lightTheme={ <HamburgerMenuLightTheme/> }
						highlighted={ <HamburgerMenuHighlighted/> }
						onClick={ this.handleSideMenuButtonClick }
					/>
				</div>

				<div className={ initObject.rightNavClasses }>
					<Link to='/about'>
						<OutlineButton 
							text='About'
							onClick={ () => {} }
							shape='rounded'
						/>
					</Link>
					<Link to='/projects'>
						<OutlineButton 
							text='Future Projects'
							onClick={ () => {} }
							shape='rounded'
						/>
					</Link>		
					<Link to='/contact'>
						<OutlineButton 
							text='Contact'
							onClick={ () => {} }
							shape='rounded'
						/>
					</Link>
					<Link to ='/'>
						<CircleButton
							size='25px'
							darkTheme={ <HomeIconDarkTheme/> }
							lightTheme={ <HomeIconLightTheme/> }
							highlighted={ <HomeIconHighlighted/> }
							onClick={ () => {} } 
						/>
					</Link>					
				</div>
			</div>
		);
	}
}

Navbar.contextType = ThemeContext;

const NavbarWithRouter = withRouter(Navbar);

export default NavbarWithRouter;
