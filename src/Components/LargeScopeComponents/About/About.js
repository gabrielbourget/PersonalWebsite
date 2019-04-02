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
					<h1>About</h1>

					<h2>Overall education and general vibe that it's deep learning across multiple fields to address complex problems</h2>

					<h2>Overall comp sci education and general web technologies and frameworks you've built skills in.</h2>

					<h2>Musical and artistic side, also bridge to portfolio project page.</h2>
				</article>
			</FromTheTopCradle>
		);
	}
}

About.contextType = ThemeContext;

export default About;
