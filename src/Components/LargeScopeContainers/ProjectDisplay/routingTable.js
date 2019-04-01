import CurrentProjects from './Projects/CurrentProjects/CurrentProjects';
import EducationalSystem from './Projects/EducationalSystem/EducationalSystem';
import SignalTreeViz from './Projects/SignalTreeViz/SignalTreeViz';
import SoftwareDependencyMonitoring from './Projects/SoftwareDependencyMonitoring/SoftwareDependencyMonitoring';
import SoundStageViz from './Projects/SoundStageViz/SoundStageViz';
import TabCordion from './Projects/TabCordion/TabCordion';

const routingTable = {
	'/projects/eb1a94dd-8ead-46ce-8a33-a8d5517892ce' : CurrentProjects,
	'/projects/b903043e-ce36-4cd7-9f74-0a42850febb6' : TabCordion,
	'/projects/2306a4f7-8039-46d4-b4e0-9be49f7c9174' : SoftwareDependencyMonitoring,
	'/projects/a170c130-3057-4ec9-9a1b-2ab30951b8aa' : EducationalSystem,
	'/projects/1f292283-b406-41d2-81ba-b58340502546' : SoundStageViz,
	'/projects/5f4e0d6d-2a2c-4241-8dfc-2ec78bcde61c' : SignalTreeViz
};

export default routingTable;
