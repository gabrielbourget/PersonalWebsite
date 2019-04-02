import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import IconDisplay from '../Icons/IconDisplay/IconDisplay';
import Paragraph from '../TextLayout/Paragraph/Paragraph';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';
import CircleButton from '../Buttons/CircleButton/CircleButton';

import styles from './Footer.module.scss';
// import WaveIconDarkTheme from './SVG/WaveIcon/WaveIconDarkTheme';
import { ReactComponent as WaveIconDarkTheme } from './SVG/WaveIcon/WaveIconDarkTheme.svg';
import { ReactComponent as  WaveIconLightTheme } from './SVG/WaveIcon/WaveIconLightTheme.svg';

// - Icon Imports - // 

// - Github
import { ReactComponent as GithubIconDarkTheme } from '../../Icons/SocialMediaIcons/Github/GithubIconDarkTheme.svg';
import { ReactComponent as GithubIconLightTheme } from '../../Icons/SocialMediaIcons/Github/GithubIconLightTheme.svg';
import { ReactComponent as GithubIconHighlighted } from '../../Icons/SocialMediaIcons/Github/GithubIconHighlighted.svg';

// - Facebook
import { ReactComponent as FacebookIconDarkTheme } from '../../Icons/SocialMediaIcons/Facebook/FacebookIconDarkTheme.svg';
import { ReactComponent as FacebookIconLightTheme } from '../../Icons/SocialMediaIcons/Facebook/FacebookIconLightTheme.svg';
import { ReactComponent as FacebookIconHighlighted } from '../../Icons/SocialMediaIcons/Facebook/FacebookIconHighlighted.svg';

// - Instagram
import { ReactComponent as InstagramIconDarkTheme } from '../../Icons/SocialMediaIcons/Instagram/InstagramIconDarkTheme.svg';
import { ReactComponent as InstagramIconLightTheme } from '../../Icons/SocialMediaIcons/Instagram/InstagramIconLightTheme.svg';
import { ReactComponent as InstagramIconHighlighted } from '../../Icons/SocialMediaIcons/Instagram/InstagramIconHighlighted.svg';

// - Twitter
import { ReactComponent as TwitterIconDarkTheme } from '../../Icons/SocialMediaIcons/Twitter/TwitterIconDarkTheme.svg';
import { ReactComponent as TwitterIconLightTheme } from '../../Icons/SocialMediaIcons/Twitter/TwitterIconLightTheme.svg';
import { ReactComponent as TwitterIconHighlighted } from '../../Icons/SocialMediaIcons/Twitter/TwitterIconHighlighted.svg';


class Footer extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const footerClasses = ClassNames(styles.footer, themeClass); 

		return (
			<div className={ footerClasses }>
				<h2>&#169; Gabriel Bourget, 02019</h2>
				<div className={ styles.connectionLinkGrid }>
					<a 
						href='https://github.com/gabrielbourget' 
						target='_blank'
						rel='noopener noreferrer' 
					>											
						<CircleButton
							size='50px'
							darkTheme={ <GithubIconDarkTheme/> }
							highlighted={ <GithubIconHighlighted/> }
							lightTheme={ <GithubIconLightTheme/> }
							onClick={ () => {} }
						/>
					</a>
					<a 
						href='https://www.facebook.com/gabriel.bourget' 
						target='_blank'
						rel='noopener noreferrer' 
					>											
						<CircleButton
							size='50px'
							darkTheme={ <FacebookIconDarkTheme/> }
							highlighted={ <FacebookIconHighlighted/> }
							lightTheme={ <FacebookIconLightTheme/> }
							onClick={ () => {} }
						/>
					</a>
					<a 
						href='https://www.instagram.com/geebriel_/' 
						target='_blank'
						rel='noopener noreferrer' 
					>											
						<CircleButton
							size='50px'
							darkTheme={ <InstagramIconDarkTheme/> }
							highlighted={ <InstagramIconHighlighted/> }
							lightTheme={ <InstagramIconLightTheme/> }
							onClick={ () => {} }
						/>
					</a>
					<a 
						href='https://twitter.com/gabrielbourget'
						target='_blank'
						rel='noopener noreferrer' 
					>											
						<CircleButton
							size='50px'
							darkTheme={ <TwitterIconDarkTheme/> }
							highlighted={ <TwitterIconHighlighted/> }
							lightTheme={ <TwitterIconLightTheme/> }
							onClick={ () => {} }
						/>
					</a>					
				</div>
				<h3>Contact &rarr; hellogabrielbourget@gmail.com</h3>
			</div>
		);
	}
}

Footer.contextType = ThemeContext;

export default Footer;
