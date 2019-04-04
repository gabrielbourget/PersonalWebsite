import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../../ThemeContext';

import TreeView from '../../../TreeView/TreeView';

import styles from './ProjectTree.module.scss';
import projectTree from '../projectTree';

class ProjectTree extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const projectTreeClasses = ClassNames(styles.projectTree, themeClass);

		return (
			<div className={ projectTreeClasses }>
				<TreeView 
					data = { projectTree }
					nodeClick={ this.props.nodeClick }
				/>
			</div>
		);
	}
}

ProjectTree.contextType = ThemeContext;

export default ProjectTree;
