import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import Jumbotron from './Jumbotron/Jumbotron';
import FilledButton from '../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from './HomePage.module.scss';

class HomePage extends React.Component {

	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;

		const bottomContentClasses = ClassNames(styles.bottomContent, themeClass);
		const keyPlaylistsCradleClasses = ClassNames(styles.keyPlaylistsCradle, themeClass);
		const keyPlaylistsClasses = ClassNames(styles.keyPlaylists, themeClass);

		return (
				<FromTheTopCradle>
					<Jumbotron/>
				</FromTheTopCradle>			
		);
	}
}

HomePage.contextType = ThemeContext;

export default HomePage;
