import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import Img from 'gatsby-image';

import '../styles/slider.css';

const SliderContainer = styled.div`
	padding: 30px;
`;

const Carousel = ({ carousel }) => {
	const { carouselImage, carouselTimer } = carousel;
	const settings = {
		dots: true,
		autoplay: true,
		autoplaySpeed: parseInt(carouselTimer),
	};
	return (
		<SliderContainer>
			<Slider {...settings}>
				{carouselImage.map(({ fluid, id }) => {
					return (
						<div key={id}>
							<Img fluid={fluid} />
						</div>
					);
				})}
			</Slider>
		</SliderContainer>
	);
};

Carousel.propTypes = {
	carousel: PropTypes.object.isRequired,
};

export default Carousel;
