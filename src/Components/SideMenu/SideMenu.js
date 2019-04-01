import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import styles from './SideMenu.module.scss';
import { communityLinks } from './Data/communityLinks';

import HorizontalDivider from '../Dividers/HorizontalDivider/HorizontalDivider';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';
import CircleButton from '../Buttons/CircleButton/CircleButton';
import CommunityLinks from './CommunityLinks/CommunityLinks';

// - Circle Down Icon
import CircleDownIconDarkTheme from './SVG/CircleDownIcon/CircleDownIcon_DarkTheme';
import CircleDownIconLightTheme from './SVG/CircleDownIcon/CircleDownIcon_LightTheme';
import CircleDownIconHighlighted from './SVG/CircleDownIcon/CircleDownIcon_Highlighted';
// - Circle Up Icon
import CircleUpIconDarkTheme from './SVG/CircleUpIcon/CircleUpIcon_DarkTheme';
import CircleUpIconLightTheme from './SVG/CircleUpIcon/CircleUpIcon_LightTheme';
import CircleUpIconHighlighted from './SVG/CircleUpIcon/CircleUpIcon_Highlighted';
// - X Icon
import { ReactComponent as XIconDarkTheme } from './SVG/XIcon/XIconDarkTheme.svg';
import { ReactComponent as XIconLightTheme } from './SVG/XIcon/XIconLightTheme.svg';
import { ReactComponent as XIconHighlighted } from './SVG/XIcon/XIconHighlighted.svg';

class SideMenu extends React.Component {

	state = {
		communityLinksExpanded: false
	};

	// - Trigger a card expansion.
	handleDownIconClick = () => {
		this.setState({ communityLinksExpanded: true });
	};

	// - Trigger a card retraction.
	handleUpIconClick = () => {
		this.setState({ communityLinksExpanded: false });
	};	

	handleSideMenuButtonClick = () => {
		this.props.onSideMenuButtonClick();
	};

	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const openClass = (this.props.open) ? styles.open : null;
		const sideMenuClasses = ClassNames(styles.sideMenu, themeClass, openClass);
		const topBarClasses = ClassNames(styles.topBar, themeClass);

		return (
			<div className={ sideMenuClasses } >
				<div className={ topBarClasses }>
					<CircleButton 
						size='20px'
						darkTheme={ <XIconDarkTheme/> }
						lightTheme={ <XIconLightTheme/> }
						highlighted={ <XIconHighlighted/> }
						onClick={ this.handleSideMenuButtonClick }
					/>					
					<h3 className={ themeClass }>Settings</h3>
				</div>
				<div className={ styles.hDividerCradle }>
					<HorizontalDivider height='3px'/>
				</div>
				<div className={ styles.themePick }>
					<div className={ styles.label }>
						<h4>Theme</h4>
					</div>
					<div className={ styles.optionButton }>
						<OutlineButton
							text='DARK'
							shape='rounded'
							onClick={ () => this.props.onThemeSwitch('dark') }
						/>
					</div>
					<div className={ styles.optionButton }>
						<OutlineButton 
							text='LIGHT'
							shape='rounded'
							onClick={ () => this.props.onThemeSwitch('light') }
						/>
					</div>					
				</div>
				<h3 className={ themeClass }>Site Navigation</h3>
				<div className={ styles.hDividerCradle }>
					<HorizontalDivider height='3px'/>
				</div>
				<div className={ styles.buttonGrid }>
					<Link to='/'>					
						<OutlineButton
							text='Home'
							shape='rounded'
							onClick={ () => {} }
						/>
					</Link>	
					<Link to='/about/'>					
						<OutlineButton
							text='About'
							shape='rounded'
							onClick={ () => {} }
						/>
					</Link>	
					<Link to='/porfolioproject/'>
						<OutlineButton
							text='Portfolio Project'
							shape='rounded'
							onClick={ () => {} }
						/>
					</Link>	
					<Link to='/futureprojects/'>
						<OutlineButton
							text='Future Projects'
							shape='rounded'
							onClick={ () => {} }
						/>
					</Link>	
					<Link to='/contact/'>					
						<OutlineButton
							text='Contact'
							shape='rounded'
							onClick={ () => {} }
						/>
					</Link>						
				</div>
				<div className={ styles.connectTitleBar }>
					<h3 className={ themeClass }>Connect</h3>
				</div>
				<div className={ styles.hDividerCradle }>
					<HorizontalDivider height='3px'/>
				</div>
				{/* Peripheral link icons go here */}
			</div>
		);
	}
}

SideMenu.contextType = ThemeContext;

export default SideMenu;
