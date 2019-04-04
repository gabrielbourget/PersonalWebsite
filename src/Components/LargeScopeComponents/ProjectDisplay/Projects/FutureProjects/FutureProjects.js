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

class FutureProjects extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.projectItemClasses }>
					<h1>Future Projects</h1>

					<p>
						<TextIndent>I</TextIndent> have really enjoyed the learning experience of building my <Link to='/portfolioproject'>portfolio project</Link>. It 
						was a great way to really get my hands dirty and build something functional that a community of people, spread out over the internet, could use 
						to be closer to one another. However, the ideas I have come up with for different software systems over the past years expand past the scope of this 
						project, and in this section of the site, I go into some of them. These projects include: 
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<Link to='/futureprojects/b903043e-ce36-4cd7-9f74-0a42850febb6'>
									A Chrome extension for managing the tabs in a web session, and saving them into presets for easy future use.
								</Link>
							</li>
							<li>
								<Link to='/futureprojects/2306a4f7-8039-46d4-b4e0-9be49f7c9174'>
									A software project utility which would keep track of the directory tree, and monitor how the files within it created dependencies to eachother 
									through such actions as javascript module imports. 
								</Link>
							</li>
{/*							<li>
								<Link to='/futureprojects/a170c130-3057-4ec9-9a1b-2ab30951b8aa'>
									An open source educational infrastructure for creating knowledge graphs of learning modules which can be moved through fluidly in a kind of 
									choose-your-own-adventure style. 
								</Link>
							</li>*/}
							<li>
								<Link to='/futureprojects/1f292283-b406-41d2-81ba-b58340502546'>
									A visualization of some key parameters of an audio signal into a dynamic sound stage, helping musicians and engineers more effectively craft and 
									mix audio together. 
								</Link>
							</li>
							<li>
								<Link to='/futureprojects/5f4e0d6d-2a2c-4241-8dfc-2ec78bcde61c'>
									A visualization of the signal tree through which audio flows in a digital audio workstation. This would seek to help musicians and engineers visualize 
									their work as it grows, and to more effectively troubleshoot problem areas, such as signal that is too hot. 
								</Link>
							</li>
						</ul>
					</p>
				</article>
			</FromTheTopCradle>			
		);
	}
}

FutureProjects.contextType = ThemeContext;

export default FutureProjects;
