import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';
import { Link } from 'react-router-dom';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from '../../ProjectItem/ProjectItem.module.scss';
import { prepareComponent } from '../../ProjectItem/helpers';

class TabCordion extends React.Component {

	render() {
		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.projectItemClasses }>
					<h1>Tabcordion</h1>

					<p>
						<TextIndent>I</TextIndent> enjoy using tab management extensions such as 
						<a href='https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg' target='_blank' rel='noopener noreferrer'> &nbsp; The Great Suspender</a> and 
						<a href='https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall' target='_blank' rel='noopener noreferrer'> &nbsp; OneTab </a>. The memory improvements on 
						the operations of my computer, along with the lack of visual clutter, make these applications very useful to my day-to-day workflow. Along similar lines, I have been brainstorming and 
						partially developing a chrome extension called Tabcordion which would be my take on this kind of functionality. 
					</p>

					<p>
						<TextIndent>Once</TextIndent> complete, the extension will allow you to package up a browsing session into an array containing links to the pages 
						in all of your open tabs. Additionally, you'll be able to save these Tabcordions with names and store them in a nice gallery and list, allowing you 
						to create preset browsing sessions to be expanded into new browsers as desired. 
					</p>

					<p>
						<TextIndent>During</TextIndent> the time period where I have worked on this project so far, my web technology knowledge was still limited to building 
						static HTML pages with some CSS and JS interactivity with jQuery. I decided to stop development for some period at the time, given the fact that the 
						codebase was becoming unwieldly and I had major pain points around state and UI management that I was having trouble addressing. Now that I have taken 
						the time to learn frameworks such as React and Redux though, I am excited to return to this project when I have the time, and to build it out for release 
						on the chrome web store eventually. 
					</p>

				</article>
			</FromTheTopCradle>			
		);
	}	
}

TabCordion.contextType = ThemeContext;

export default TabCordion;
