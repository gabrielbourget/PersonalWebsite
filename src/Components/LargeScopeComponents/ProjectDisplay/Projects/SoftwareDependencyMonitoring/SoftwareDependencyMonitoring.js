import React from 'react';
import { ThemeContext } from '../../../../../ThemeContext';
import { Link } from 'react-router-dom';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from '../../ProjectItem/ProjectItem.module.scss';
import { prepareComponent } from '../../ProjectItem/helpers';

class SoftwareDependencyMonitoring extends React.Component {

	render() {
		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.projectItemClasses }>
					
					<h1>Software Dependency<br/> Monitoring System</h1>

					<p>
						<TextIndent>Much</TextIndent> of the brittleness and fragility that is baked into modern web development projects stems from the way that javascript 
						files depend on the ability to make resource imports from specific locations within the directory structure. When those dependencies are deleted or 
						moved to another location with the project structure, all other elements in the project that depend on finding them there will no longer build. 
					</p>

					<p>
						<TextIndent>What</TextIndent> I'd like to do is to create a graph database which maps out the composition tree of all resources that exist within the project, 
						and then build dependency relationships between those nodes. This graph would be able to keep a snapshot of the topology formed by this folder structure and the dependency 
						relationships that criss-cross it. 
					</p>

					<p>
						<TextIndent>Running</TextIndent> in the background as a process that watches over a directory structure, it could throw warnings whenever a developer goes to delete 
						or move a resource that is expected to be there for other files in the program to use. Import relationships to other nodes could trigger a subscription service implemented by 
						the program which could automatically update the import paths used to locate those resources if they were to be renamed or moved within the project's overall structure. 
						In the case of deletion, the program could at least throw a warning which would allow the developer to confirm that they'd like to delete the resources even though it will 
						break dependency relationships. 
					</p>

					<p>
						<TextIndent>Implemented</TextIndent> as a graph, this database could relatively easily be visualized in rich ways. Expressed through participatory mediums that break off of the 
						screen and into AR/VR/Holograms, it could allow teams to use this visualization as a central point of discussion and formation of development strategy. 
					</p>
				</article>
			</FromTheTopCradle>			
		);
	}	
}

SoftwareDependencyMonitoring.contextType = ThemeContext;

export default SoftwareDependencyMonitoring;
