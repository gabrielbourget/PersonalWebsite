import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';
import { Link } from 'react-router-dom';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from './About.module.scss';
import { prepareComponent } from './helpers';

class About extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.articleClasses }>
					<h1>About Me</h1>

					<p>
						<TextIndent>Coming</TextIndent> out of a long educational journey over the past ten years, I have had the opportunity to explore 
						topics that are of interest to me, and have come out the other end with an undergraduate degree in Physics and Math from Carleton 
						University and an advanced diploma in Computer Science from Algonquin college. The kinds of problems that we are trying to tackle in 
						this century, from climate change to global inequality, are complex and interconnected. As such, the approach I have tried to take with my 
						educational path is to dive deep into many subjects, developing the kind of rich connections between subjects needed to think outside the box and start 
						to contribute to solutions to these problems. 
					</p>

					<p>
						<TextIndent>During</TextIndent> my time at Algonquin, I enjoyed an excellent curriculum where we really got into computer science fundamentals.
						As the program progressed, I had the opportunity to explore all sorts of areas, from low-level C/C++ where I built the front end of a compiler, 
						to hardware interfacing, to UI development in languages such as Java and HTML/CSS/JS. While I enjoyed all of it, I found that I really took a liking 
						to front-end web development. The combination of visual design and interactive functionality was very appealing to me as a balanced work process. Additionally,
						the velocity and energy displayed in industry have been very exciting to me as I have followed the Javascript explosion centered around new infrastructure 
						such as NodeJS and React. 
					</p>

					<p>
						<TextIndent>I</TextIndent> have strived to create a foundation in the core web technologies of Javascript, CSS, and HTML throughout my computer science 
						education. Beyond the core laid out in the courses of my Algonquin program, I have made sure to build up my practice and knowledge of the industry with 
						all manner of Youtube tutorials, Medium articles, online courses, and textbooks. Two resources that I have found especially useful during this process 
						were the online courses offered by <a href='https://courses.wesbos.com/' target='_blank' rel='noopener noreferrer'>Wes Bos</a>, and this 
						<a href='https://www.fullstackreact.com/' target='_blank' rel='noopener noreferrer'>&nbsp; Fullstack React</a> book written by Fullstack.io.
					</p>

					<p>
						<TextIndent>In</TextIndent> addition to the core of computer science skills I have been working to build over the past years, I have also been playing 
						piano since I was three years old, and have in the past years made the move into learning sound design, music production, and audio engineering. While 
						developing a <a href='https://soundcloud.com/imjuststarstuff/contact' target='_blank' rel='noopen noreferrer'> musical project </a> of my own, I have 
						also worked closely with my sister to develop and release a six-track debut EP for her own 
						<a href='https://soundcloud.com/hoodiegen/sets/hoodie' target='_blank' rel='noopener noreferrer'> &nbsp; project</a>, which we released last November.
						The <Link to='/portfolioproject'>portfolio project</Link> that I have developed in the past months is a directory that serves to bring together a global 
						music community that I am working to build a place in. It maintains a set of artist profiles with links to their other social media/streaming platform 
						presences, along with a list of links to prominent chat servers, subreddits, artist collectives etc... that make up the nebulous online community.
					</p>
				</article>
			</FromTheTopCradle>
		);
	}
}

About.contextType = ThemeContext;

export default About;
