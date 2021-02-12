import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Carousel } from '../components';
import { Media, Aside, Mixins } from '../styles';

const DetailedProjectsContainer = styled.div`
	${Mixins.flexContainer}
	${Media.bigDesktop`
		display: block;
	`};
	${Media.bigDesktop`flex-direction: column;`};
`;

const CarouselContainer = styled.div`
	flex-grow: 1;
	max-width: 650px;
	margin-bottom: 50px;
`;

const DetailsContainer = styled(Aside)`
	flex-basis: 237px;
	padding: 30px 13px;
`;

const DetailsTitle = styled.h2`
	font-size: 1.3rem;
`;

const SecondaryTitle = styled.h3`
	font-size: 1.3rem;
`;

const HeaderText = styled.p`
	font-size: 0.9rem;
	font-weight: bold;
`;

const DescriptionText = styled.p``;

const FooterText = styled.p``;

const DetailedProject = ({ project, carouselTimer = 3000 }) => {
	const carouselImage = project.projectImages;
	const {
		title,
		secondaryTitle,
		headerText,
		descriptionText,
		footerText,
		completed,
	} = project;

	return (
		<DetailedProjectsContainer>
			<CarouselContainer>
				<Carousel carousel={{ carouselImage, carouselTimer }} />
			</CarouselContainer>
			<DetailsContainer>
				<DetailsTitle>{title}</DetailsTitle>
				<br />
				<SecondaryTitle>{secondaryTitle}</SecondaryTitle>
				<br />
				<HeaderText>{headerText.headerText}</HeaderText>
				<br />
				<DescriptionText>{descriptionText.descriptionText}</DescriptionText>
				<br />
				<FooterText>{footerText.footerText}</FooterText>
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
