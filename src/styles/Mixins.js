import { css } from 'styled-components';
import Theme from './Theme';
import Media from './Media';

const { myColors, fontSizes } = Theme;

const Mixins = {
	sidePadding: css`
		padding: 0 150px;
		${Media.desktop`padding: 0 100px;`};
		${Media.tablet`padding: 0 50px;`};
		${Media.phablet`padding: 0 25px;`};
	`,
	flexCenter: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	flexBetween: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,
	flexEnd: css`
		display: flex;
		justify-content: flex-end;
		align-items: center;
	`,
	link: css`
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		color: inherit;
		position: relative;
		transition: ${Theme.transition};
		cursor: pointer;
		&:hover,
		&:active,
		&:focus {
			color: white;
			outline: 0;
		}
	`,
	smallButton: css`
    color: ${myColors.white};
    background-color: transparent;
    border: 1px solid ${myColors.white};
    border-radius: 3px;
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smallish};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${Theme.transition};
    outline: none;
    &:hover,
    &:focus,
    &:active {
      color: ${myColors.sage}
      border-color: ${myColors.sage}
      background-color: ${myColors.transparentSage};
    }
    &:after {
      display: none !important;
    }
  `,
};

export default Mixins;
