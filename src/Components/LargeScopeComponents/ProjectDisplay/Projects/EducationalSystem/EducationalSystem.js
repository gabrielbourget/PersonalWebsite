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

class EducationalSystem extends React.Component {
	
	render() {
		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article>
					
				</article>
			</FromTheTopCradle>			
		);
	}	
}

EducationalSystem.contextType = ThemeContext;

export default EducationalSystem;
