import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Section } from '../styles';

const ProjectsContainer = styled(Section)``;

const ProjectsList = styled.ol``;

const ProjectsListItem = styled.li``;

const SectionTitle = styled.h2`
	margin: 10px 0;
	font-weight: bold;
`;

const SecondaryTitle = styled.p`
	font-weight: bold;
	padding: 10px 0;
`;

const Summary = styled.div`
	margin: 20px;
`;

const ProjectsShortList = ({ projects }) => {
	return (
		<ProjectsContainer>
			<ProjectsList>
				{projects.nodes.map(({ id, title, secondaryTitle, summary }) => {
					return (
						<ProjectsListItem key={id}>
							<SectionTitle>{title}</SectionTitle>
							<Summary>
								<SecondaryTitle>{secondaryTitle}</SecondaryTitle>
								<ReactMarkdown source={summary.summary} />
							</Summary>
						</ProjectsListItem>
					);
				})}
			</ProjectsList>
		</ProjectsContainer>
	);
};

ProjectsShortList.propTyped = {
	projects: PropTypes.object.isRequired,
};

export default ProjectsShortList;
