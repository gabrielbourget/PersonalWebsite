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

	state = {

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

	handleResize = () => this.setState( {windowWidth: window.innerWidth });

	conditionalButtonRendering = () => {
		if (this.state.windowWidth >= 650) {
			return (
				<React.Fragment>
					<Link to='/about'>
						<OutlineButton 
							text='About'
							onClick={ () => {} }
							shape='rounded'
						/>
					</Link>
					<Link to='/portfolioproject'>
						<OutlineButton 
							text='Porfolio Project'
							onClick={ () => {} }
							shape='rounded'
						/>
					</Link>					
					<Link to='/futureprojects'>
						<OutlineButton 
							text='Future Projects'
							onClick={ () => {} }
							shape='rounded'
						/>
					</Link>					
				</React.Fragment>
			);
		}
		else return null;
	};

	componentDidMount = () => {
		this.setState( { windowWidth: window.innerWidth } );
		window.addEventListener('resize', this.handleResize);
	};

	componentWillUnmount = () => window.removeEventListener('resize', this.handleResize);

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
					{ this.conditionalButtonRendering() }
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
