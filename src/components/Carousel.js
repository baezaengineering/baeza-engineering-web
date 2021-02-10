import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import { Section } from '../styles';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = ({ carousel }) => {
	const { carouselImage, carouselTimer } = carousel.nodes[0];

	return (
		<Section>
			<AutoplaySlider
				play={true}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={parseInt(carouselTimer)}
			>
				{carouselImage.map(({ fluid, id }) => {
					return <div data-src={fluid.src} key={id} />;
				})}
			</AutoplaySlider>
		</Section>
	);
};

Carousel.propTypes = {
	carousel: PropTypes.object.isRequired,
};

export default Carousel;
