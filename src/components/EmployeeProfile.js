import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Media, Mixins, Theme } from '../styles';
const { fontSizes, myColors } = Theme;

const EmployeeProfileContainer = styled.div`
	margin: 20px 13px;
	width: 325px;
	${Media.thone`margin: 20px 0px;`}
	${Media.desktop`width: 60%;`}
`;

const Name = styled.h1`
	display: flex;
	margin: 10px;
	font-size: 1.8rem;
	justify-content: center;
`;

const Certifications = styled.h2`
	display: flex;
	margin: 10px;
	justify-content: center;
	font-size: 1.1rem;
`;

const StartDate = styled.p`
	margin: 10px;
	display: flex;
	justify-content: center;
`;

const LinkContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const ResumeLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70px;
	${Mixins.smallButton};
	color: ${myColors.black};
	border-color: ${myColors.black};
	background-color: ${myColors.alto};
	font-size: ${fontSizes.small};
`;

const EmployeeProfile = ({ profile }) => {
	const { cv, employeeCerts, name, profileImage, startDate } = profile;

	return (
		<EmployeeProfileContainer>
			<Img fluid={profileImage.fluid} />
			<Name>{name}</Name>
			<Certifications>{employeeCerts.employeeCerts}</Certifications>
			<StartDate>{startDate}</StartDate>
			<LinkContainer>
				<ResumeLink
					href={cv.file.url}
					target='_blank'
					rel='nofollow noopener noreferrer'
				>
					Resume
				</ResumeLink>
			</LinkContainer>
		</EmployeeProfileContainer>
	);
};

EmployeeProfile.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default EmployeeProfile;
