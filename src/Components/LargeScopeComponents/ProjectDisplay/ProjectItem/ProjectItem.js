import React from 'react';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './ProjectItem.module.scss';
import { prepareComponent } from './helpers';

class ProjectItem extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<div className={ initObject.projectItemClasses }>
				<h1>Table of Contents</h1>
			</div>
		);
	}
}

ProjectItem.contextType = ThemeContext;

export default ProjectItem;
