import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import { Section } from '../styles';
import { Mixins } from '../styles';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const CarouselContainer = styled(Section)`
	${Mixins.sidePadding}
	margin-bottom: 50px;
`;

const Carousel = ({ carousel }) => {
	const { carouselImage, carouselTimer } = carousel.nodes[0];

	return (
		<CarouselContainer>
			<AutoplaySlider
				play={true}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={parseInt(carouselTimer)}
			>
				{carouselImage.map(({ fluid }, index) => {
					return <div data-src={fluid.src} key={index} />;
				})}
			</AutoplaySlider>
		</CarouselContainer>
	);
};

Carousel.propTypes = {
	data: PropTypes.object,
};

Carousel.defaultProps = {
	data: {},
};

export default Carousel;
