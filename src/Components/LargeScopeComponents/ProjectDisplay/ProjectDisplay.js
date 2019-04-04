import React from 'react';
import ClassNames from 'classnames';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom'; 
import { ThemeContext } from '../../../ThemeContext';

import FromTheTopCradle from '../../Cradles/FromTheTopCradle/FromTheTopCradle';
import ProjectTree from './ProjectTree/ProjectTree';
import TreeToggleButton from './TreeToggleButton/TreeToggleButton';

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

	state = {
		treeOpened: false,
		windowWidth: window.innerWidth
	};

	handleResize = () => this.setState( {windowWidth: window.innerWidth });

	toggleTree = () => {
		const prevState = this.state;
		this.setState( (prevState) => (
			{ treeOpened: !prevState.treeOpened }
		));
	}

	conditionalTreeRender = () => {
		if (this.state.windowWidth > 650) return <ProjectTree/>;
		if (this.state.windowWidth <= 650 && this.state.treeOpened) {
			return (
				<React.Fragment>
					<ProjectTree nodeClick={ this.toggleTree }/>	
					<TreeToggleButton 
						onClick={ this.toggleTree }
						status='open'
					/>
				</React.Fragment>
			);
		}
		else return (
			<TreeToggleButton 
				onClick={ this.toggleTree }
				status='closed'
			/>
		);
	};

  componentDidMount = () => {
		this.setState( { windowWidth: window.innerWidth } );
		window.addEventListener('resize', this.handleResize);
	};

	componentWillUnmount = () => window.removeEventListener('resize', this.handleResize);  

	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const projectDisplayClasses = ClassNames(styles.projectDisplay, themeClass);

		return (
			<FromTheTopCradle>
				<div className={ projectDisplayClasses }>
					
					{ this.conditionalTreeRender() }

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
