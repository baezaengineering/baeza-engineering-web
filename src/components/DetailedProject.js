import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Carousel } from '../components';
import { Mixins, Section, Media, Aside } from '../styles';

const DetailedProjectsContainer = styled.div`
	display: flex;
	${Media.desktop`flex-direction: column;`};
`;

const CarouselContainer = styled.div`
	flex-grow: 1;
	max-width: 700px;
	margin-bottom: 50px;
`;

const DetailsContainer = styled(Aside)`
	flex-basis: 200px;
	padding: 50px 0;
`;

const DetailsTitle = styled.h2``;

const DetailedProject = ({ project, carouselTimer = 3000 }) => {
	const carouselImage = project.projectImages;
	console.log(carouselImage);
	return (
		<DetailedProjectsContainer>
			<CarouselContainer>
				<Carousel carousel={{ carouselImage, carouselTimer }} />
			</CarouselContainer>
			<DetailsContainer>
				<DetailsTitle>Details</DetailsTitle>
			</DetailsContainer>
		</DetailedProjectsContainer>
	);
};

DetailedProject.propTypes = {
	projects: PropTypes.object,
};

DetailedProject.defailtProps = {
	projects: {},
};

export default DetailedProject;
