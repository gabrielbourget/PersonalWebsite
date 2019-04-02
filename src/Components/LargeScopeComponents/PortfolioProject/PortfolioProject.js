import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';
import { Link } from 'react-router-dom';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from './PortfolioProject.module.scss';
import { prepareComponent } from './helpers';

class PortfolioProject extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.articleClasses }>
					<h1>Portfolio Project</h1>

					<div className={ initObject.imageLinkContainerClasses }>
						<div className={ initObject.imageLinkClasses }>
							<a 
								href="https://waveguide.herokuapp.com"
								target='_blank'
								rel='noopener noreferrer'
								
							>
								Waveguide
							</a>						
						</div>						
					</div>	

					<p>
						<TextIndent direction='leftToRight'>Over</TextIndent> the past seven or so years, the increasingly distributed and
						networked ways in which we experience community online within the major social networks of our time has collided with 
						the paradigm shift over to streaming platforms such as Spotify, Apple Music, and Soundcloud in a really interesting and
						special way. Across these social networks and streaming platforms, and drawing from diverse music scenes such as Trap, 
						Garage, Witch House, and Trance, a global community of artists and fans has formed around a set of loose tendencies adding 
						up to be known collectively as <strong>wave music</strong>. 
					</p>

					<p>
						<TextIndent direction='leftToRight'>As</TextIndent> both a 

						 <a 
						 	href='https://soundcloud.com/imjuststarstuff/contact' 
							target='_blank'
							rel='noopen noreferrer'
						 >
							&nbsp;creator of
						</a> 

						, and fan of this kind of music, I've built this 

						<a
							href='https://waveguide.herokuapp.com'
							target='_blank'
							rel='noopener noreferrer'
						>
						&nbsp; application &nbsp;
						</a

						>

						with the intention of serving that community, seeking for it to 
						act as a directory and hub for artists and all others to use. It also doubles as a portfolio project in which I am seeking 
						to demonstrate a working understanding of the core technologies and design patterns that make up the modern web applications 
						of the day, with a focus on front end development. You can find more information on this artistic community, along with a technical
						documentation that really dives into the technologies and design patterns that I employed 

						<a
							href='https://waveguide.herokuapp.com/documentation/f161856e-5375-4a66-882f-85b122eb439d'
							target='_blank'
							rel='noopener noreferrer'
						>
							&nbsp; here
						</a>.

						The codebase for the project is also available on

						<a
							href='https://github.com/gabrielbourget/waveguide'
							target='_blank'
							rel='noopener noreferrer'
						>
							&nbsp;Github
						</a>.
					</p>

				</article>
			</FromTheTopCradle>
		);
	}
}

PortfolioProject.contextType = ThemeContext;

export default PortfolioProject;
