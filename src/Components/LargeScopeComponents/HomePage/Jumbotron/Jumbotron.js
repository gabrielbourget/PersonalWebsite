import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../../ThemeContext';

// import { ReactComponent as ChevronDownSkinnyDarkTheme } from './SVG/ChevronDownSkinny/ChevronDownSkinnyDarkTheme.svg';
import ChevronDownSkinnyDarkTheme from './SVG/ChevronDownSkinny/ChevronDownSkinnyDarkTheme';
// import { ReactComponent as WaveIcon } from './SVG/WaveIcon/WaveIconLightTheme.svg';
//import IconDisplay from '../../../Icons/IconDisplay/IconDisplay';
import SingleIcon from '../../../Icons/SingleIcon/SingleIcon';
import FilledButton from '../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from './Jumbotron.module.scss';
import { prepareComponent } from './helpers';

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
				<Link to='/portfolioProject'>
					<FilledButton 
						text='Portfolio Project'
						onClick={ () => {} }
					/>
				</Link>				
				<div className={ styles.downChevron }>
					<SingleIcon 
						size='30px'
						icon={ <ChevronDownSkinnyDarkTheme/> }
					/>
				</div>
			</div>
		);
	}
}

Jumbotron.contextType = ThemeContext;

export default Jumbotron;

