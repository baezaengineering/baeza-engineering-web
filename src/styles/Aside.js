import styled from 'styled-components';
import Media from './Media';

const Aside = styled.aside`
	flex: 0 1 250px;
	padding-right: 25px;
	padding-left: 25px;
	${Media.desktop`
		padding-right: 10px;
		padding-left: 10px;
	`};
	${Media.thone`
		flex-basis: 100px;
		padding-right: 0px;
		padding-left: 0px;
	`};
	${Media.tablet`padding: 30px 0;`};
`;

export default Aside;
