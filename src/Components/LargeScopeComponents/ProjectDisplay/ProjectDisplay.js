import React from 'react';
import ClassNames from 'classnames';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom'; 
import { ThemeContext } from '../../../ThemeContext';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import ProjectTree from './ProjectTree/ProjectTree';

import styles from './ProjectDisplay.module.scss';
import routingTable from './routingTable';

// - Import all projects
import FutureProjects from './Projects/FutureProjects/FutureProjects';
import EducationalSystem from './Projects/EducationalSystem/EducationalSystem';
import SignalTreeViz from './Projects/SignalTreeViz/SignalTreeViz';
import SoftwareDependencyMonitoring from './Projects/SoftwareDependencyMonitoring/SoftwareDependencyMonitoring';
import SoundStageViz from './Projects/SoundStageViz/SoundStageViz';
import TabCordion from './Projects/TabCordion/TabCordion';

class ProjectDisplay extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const projectDisplayClasses = ClassNames(styles.projectDisplay, themeClass);

		return (
			<FromTheTopCradle>
				<div className={ projectDisplayClasses }>
					<ProjectTree/>

					<Route path='/futureprojects' exact component={ FutureProjects }/>
					<Route 
						path={ `/futureprojects/:articleId` }
						render= { () => {

							const path = this.props.location.pathname;

							return (
								React.createElement(routingTable[path])
							)
						}}
					/>				
				</div>
			</FromTheTopCradle>	
		);
	}
}

ProjectDisplay.contextType = ThemeContext;

const ProjectDisplayWithRouter = withRouter(ProjectDisplay);

export default ProjectDisplayWithRouter;
