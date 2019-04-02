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

					<h2>Overview of project</h2>

					<h3>mention documentation as hook into deeper layer</h3>

					<h2>Overview of tech stack, main architectural structure, and design patterns/api features used</h2>

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
				</article>
			</FromTheTopCradle>
		);
	}
}

PortfolioProject.contextType = ThemeContext;

export default PortfolioProject;
