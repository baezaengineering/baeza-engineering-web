import React from 'react';
import styled from 'styled-components';

const CertsContainer = styled.div``;

const CertsTitle = styled.h2`
	font-weight: bold;
`;

const CertsList = styled.ol`
	margin: 13px;
`;

const CertsListItem = styled.li`
	margin: 10px;
`;

const Certifications = ({ certifications }) => {
	return (
		<CertsContainer>
			<CertsTitle>Firm Certifications</CertsTitle>
			<CertsList>
				{certifications.nodes.map(certs => {
					const { certificationName, description, id } = certs;
					return (
						<CertsListItem key={id}>
							<p>{certificationName}</p>
						</CertsListItem>
					);
				})}
			</CertsList>
		</CertsContainer>
	);
};

export default Certifications;
