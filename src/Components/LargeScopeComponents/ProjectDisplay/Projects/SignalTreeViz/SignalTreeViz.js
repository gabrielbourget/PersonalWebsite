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
import signalTreeSketch from './SignalTreeSketch.jpg';

class SignalTreeViz extends React.Component {

	render() {
		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.projectItemClasses }>
					<h1>Signal Tree Visualization</h1>

					<p>
						<TextIndent>Music</TextIndent> production is fundamentally a process of combination, negotiating how all the different parts of a 
						song might be combined together to lead to one that is musically pleasing and sonically balanced. Starting from all of the source 
						elements making up the parts of your song, audio recordings/midi generated audio is routed down a signal chain, running through tools 
						such as gain stagers, compressors, equalizers, reverbs, delays, saturators etc... to shape and affect them as one pleases. These signal 
						chains can also run in parallel, using tools such as sends and auxiliaries to color the original signal with a copy of itself that is 
						perhaps affected by a reverb or a delay.
					</p>

					<p>
						<TextIndent>When</TextIndent> working with audio, one also has the option to group these tracks together, perhaps by combining all the channels 
						contributing to the percussion of your song. The summation of these groups might then be processed through a tool like a compressor in order to 
						reduce the dynamic range between these percussion elements and make them more consistently audible within the overall mixdown. At the end of the 
						signal chain is where every track and group routes into a master channel, to be combined and rendered out into mono or stereo format as a finalized waveform. 
					</p>

					<p>
						<TextIndent>What</TextIndent> I'd like to do is to visualize this process as a tree structure that maps every channel as a branch, shows the components 
						along the way that generate and modulate their sound, and the ways that they combine together to end up as one master branch. 
					</p>

					<p>
						<TextIndent>I'd</TextIndent> like to start by building a proof of concept data structure that mocks in the kinds of nodes that exist along these paths and the ways 
						they combine to form the signal tree. I could build the persistence layer as a graph database. Eventually I'd want to visualize this in 2D on a screen, but again, 
						with a good data layer like that, it could be fed into much more involved representations. 
					</p>

					<p>
						<TextIndent>Eventually,</TextIndent> in the context of having much greater abilities in audio signal processing software design, I could feed in real components along signal chains 
						and monitor the ways they are affecting that signal. Such a dynamic structure sitting on top of a <a href='https://en.wikipedia.org/wiki/Digital_audio_workstation' target='_blank' rel='noopener noreferrer'>DAW</a>'s 
						signal chain could provide useful information on how your signal is being processed and combined, and problem areas that arise such as signal coming out too hot out of a certain channel or module. 
					</p>

					<p>
						<TextIndent>A</TextIndent> mockup of the data structure which would underlie such a program is provided below. You have many sources being affected by modifiers down their 
						signal paths (such as reverbs, compressors, saturators, etc...). Some of these source channels feed into group busses where they are processsed together, and some send some 
						portion of their signals to auxiliaries, to be colored by additional effects. Eventually, they all route into the master bus and are printed as stereo or mono audio. 
					</p>

					<div className={ initObject.imageLinkContainerClasses }>
						<img src={ signalTreeSketch } alt="Signal Tree Sketch" style={ {height: '99%', width: '90%'} } />
					</div>
				</article>
			</FromTheTopCradle>			
		);
	}	
}

SignalTreeViz.contextType = ThemeContext;

export default SignalTreeViz;
