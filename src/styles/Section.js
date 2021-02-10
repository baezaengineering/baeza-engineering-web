import styled from 'styled-components';
import Media from './Media';

const Section = styled.section`
	margin: 0 auto;
	padding: 50px 0;
	max-width: 1000px;
	${Media.tablet`padding: 30px 0;`};
`;

export default Section;
