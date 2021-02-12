import React from 'react';
import styled from 'styled-components';

import { Section, Theme } from '../styles';
const { myColors } = Theme;

const FooterContainer = styled(Section)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 70px;
	background-color: ${myColors.alto};
`;

const Copyright = 'Copyright (c) 2021 Baeza Engineering';

const Footer = () => {
	return <FooterContainer>{Copyright}</FooterContainer>;
};

export default Footer;
