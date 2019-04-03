import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../../ThemeContext';

//import IconDisplay from '../../../Icons/IconDisplay/IconDisplay';
import SingleIcon from '../../../Icons/SingleIcon/SingleIcon';
import FilledButton from '../../../Buttons/FilledButton/FilledButton';
import CircleButton from '../../../Buttons/CircleButton/CircleButton';
import HorizontalDivider from '../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from './Jumbotron.module.scss';
import { prepareComponent } from './helpers';

// - Icon Imports - // 

// - Github
import { ReactComponent as GithubIconDarkTheme } from '../../../../Icons/SocialMediaIcons/Github/GithubIconDarkTheme.svg';
import { ReactComponent as GithubIconLightTheme } from '../../../../Icons/SocialMediaIcons/Github/GithubIconLightTheme.svg';
import { ReactComponent as GithubIconHighlighted } from '../../../../Icons/SocialMediaIcons/Github/GithubIconHighlighted.svg';

// - Facebook
import { ReactComponent as FacebookIconDarkTheme } from '../../../../Icons/SocialMediaIcons/Facebook/FacebookIconDarkTheme.svg';
import { ReactComponent as FacebookIconLightTheme } from '../../../../Icons/SocialMediaIcons/Facebook/FacebookIconLightTheme.svg';
import { ReactComponent as FacebookIconHighlighted } from '../../../../Icons/SocialMediaIcons/Facebook/FacebookIconHighlighted.svg';

// - Instagram
import { ReactComponent as InstagramIconDarkTheme } from '../../../../Icons/SocialMediaIcons/Instagram/InstagramIconDarkTheme.svg';
import { ReactComponent as InstagramIconLightTheme } from '../../../../Icons/SocialMediaIcons/Instagram/InstagramIconLightTheme.svg';
import { ReactComponent as InstagramIconHighlighted } from '../../../../Icons/SocialMediaIcons/Instagram/InstagramIconHighlighted.svg';

// - Twitter
import { ReactComponent as TwitterIconDarkTheme } from '../../../../Icons/SocialMediaIcons/Twitter/TwitterIconDarkTheme.svg';
import { ReactComponent as TwitterIconLightTheme } from '../../../../Icons/SocialMediaIcons/Twitter/TwitterIconLightTheme.svg';
import { ReactComponent as TwitterIconHighlighted } from '../../../../Icons/SocialMediaIcons/Twitter/TwitterIconHighlighted.svg';

// - LinkedIn
import { ReactComponent as LinkedInIconDarkTheme } from '../../../../Icons/SocialMediaIcons/LinkedIn/LinkedInIconDarkTheme.svg';
import { ReactComponent as LinkedInIconLightTheme } from '../../../../Icons/SocialMediaIcons/LinkedIn/LinkedInIconLightTheme.svg';
import { ReactComponent as LinkedInIconHighlighted } from '../../../../Icons/SocialMediaIcons/LinkedIn/LinkedInIconHighlighted.svg';

class Jumbotron extends React.Component {
	render() {

		const initObject = prepareComponent(this.props, this.context, styles);

		return (
			<div className={ initObject.jumbotronClasses }>
				<Link to='/about'>
					<h1 className={ initObject.themeClass }>
						Gabriel Bourget
					</h1>
				</Link>
				<h2>
					Software Developer
				</h2>
				<HorizontalDivider/>
				<Link to='/PortfolioProject'>
					<FilledButton 
						text='Portfolio Project'
						onClick={ () => {} }
					/>
				</Link>				
				<div className={ initObject.connectionLinkGridClasses }>
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
					<a 
						href='https://www.linkedin.com/in/gabrielbourget'
						target='_blank'
						rel='noopener noreferrer' 
					>											
						<CircleButton
							size='50px'
							darkTheme={ <LinkedInIconDarkTheme/> }
							highlighted={ <LinkedInIconHighlighted/> }
							lightTheme={ <LinkedInIconLightTheme/> }
							onClick={ () => {} }
						/>
					</a>
				</div>
			</div>
		);
	}
}

Jumbotron.contextType = ThemeContext;

export default Jumbotron;

