import React from 'react';
import { ThemeContext } from '../../../../../ThemeContext';
import { Link } from 'react-router-dom';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from '../../ProjectItem/ProjectItem.module.scss';
import { prepareComponent } from '../../ProjectItem/helpers';

class SoundStageViz extends React.Component {

	render() {
		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.projectItemClasses }>
					<h1>Sound Stage Visualization</h1>

					<p>
						<TextIndent>Often</TextIndent> in music production, one uses the metaphor of the <i>sound stage</i> to build a conceptual 
						framework within which they can make more informed artistic decisions. This conceptual space exists in three dimensions 
						and helps to build an understanding of how the timbral composition, stereo spread, and reverb/delay tails of a sound are 
						dynamically related to one another. 
					</p>

					<p>
						<TextIndent>What</TextIndent> I'd like to do is build a three dimensional visualization of such a sound stage, first on a screen, 
						but eventually in mixed reality settings and holograms. On the X axis, I would map the stereo spread of my sound (the degree to which 
						the left or right signal is louder than the other, giving the impression that it is coming from the left or right). On the Y axis, I 
						would plot the timbral decomposition of a source sound, showing which frequencies are dominant within the timbre as a heat map rising 
						from 20Hz up to 20KHz (similar to the FL Studio Parametric EQ). On the Z axis, I would fade the 2D surface created by the timbre and 
						stereo spread over time, showing how the sound lingered after it has passed due to delays or reverb tails. 
					</p>

					<p>
						<TextIndent>Given</TextIndent> that this type of visualization could be created from any source signal, a plugin version of this tool could be 
						placed along any signal path in a digital audio workstation. This means that you could visualize this sound stage at the level of one Audio/Midi 
						channel, any grouping of those signals, or the cumulative summation of all of them on the master channel. Building such wide-ranging use-cases 
						for a visualization like this could incorporate it into the work processes of sound design, music production, and audio engineering.
					</p>
					
				</article>
			</FromTheTopCradle>			
		);
	}	
}

SoundStageViz.contextType = ThemeContext;

export default SoundStageViz;
