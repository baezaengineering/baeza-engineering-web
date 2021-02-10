import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Section, Theme } from '../styles';
const { myColors, fontSizes } = Theme;

const ContactContainer = styled.div``;

const ContactInfo = styled.div``;

const Title = styled.h2`
	margin: 15px 0;
`;

const ContactList = styled.ol`
	font-size: ${fontSizes.small};
	color: ${myColors.scorpion};
`;

const Tag = styled.span`
	color: ${myColors.emperor};
	font-weight: bold;
`;

const ContactListItem = styled.li`
	margin: 10px;
`;

const Map = styled.div`
	margin: 15px 0;
`;

const Contact = ({ contact }) => {
	const { address, companyEmail, companyPhone } = contact.nodes[0];
	return (
		<ContactContainer>
			<ContactInfo>
				<Title>Contact Us</Title>
				<ContactList>
					<ContactListItem>
						<Tag>Email</Tag>
						<br />
						<a href={`mailto:${companyEmail}`}>{companyEmail}</a>
					</ContactListItem>
					<ContactListItem>
						<Tag>Phone</Tag>
						<br />
						{companyPhone}
					</ContactListItem>
					<ContactListItem>
						<Tag>Address</Tag>
						<br />
						<ReactMarkdown>{address.address}</ReactMarkdown>
					</ContactListItem>
				</ContactList>
			</ContactInfo>
			<Map>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.749259640171!2d-97.84883764886067!3d30.18715578174142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4c6db7339f09%3A0xb609143ac7e91923!2s9701%20Brodie%20Ln%20UNIT%20203%2C%20Austin%2C%20TX%2078748!5e0!3m2!1sen!2sus!4v1612925457190!5m2!1sen!2sus'
					width='250'
					height='250'
					frameBorder='0'
					style={{ border: 0 }}
					allowFullScreen={false}
					aria-hidden={false}
					tabIndex='0'
				/>
			</Map>
		</ContactContainer>
	);
};

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default Contact;
