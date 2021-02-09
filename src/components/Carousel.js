import React from 'react';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Img from 'gatsby-image';
import 'react-awesome-slider/dist/styles.css';

import { Section } from '../styles';
import logo from '../images/BE_Logo.png';
import { Mixins } from '../styles';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const CarouselContainer = styled(Section)`
	${Mixins.sidePadding}
`;

const Carousel = ({ data }) => {
	console.log(data.projects.nodes[0].projectImage.fluid.src);
	return (
		<CarouselContainer>
			<AutoplaySlider
				play={true}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={2000}
			>
				<div data-src={data.projects.nodes[0].projectImage.fluid.src} />
				<div data-src={logo} />
			</AutoplaySlider>
		</CarouselContainer>
	);
};

export default Carousel;
