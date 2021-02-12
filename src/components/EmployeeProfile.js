import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Media } from '../styles';

const EmployeeProfileContainer = styled.div`
	margin: 20px 13px;
	width: 350px;
	height: 450px;
	background-color: blue;
	${Media.thone`margin: 20px 0px;`}
	${Media.desktop`width: 100%;`}
`;

const EmployeeProfile = () => {
	return <EmployeeProfileContainer>Details</EmployeeProfileContainer>;
};

export default EmployeeProfile;
