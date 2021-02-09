const Theme = {
	myColors: {
		alto: '#DBDBDB',
		white: '#FFFFFF',
		lightGrey: '#606a86',
		slate: '#8892b0',
		gallery: '#EEEEEE',
		darkGrey: '#333f58',
		sage: '#5CDB95',
		transparentSage: 'rgba(92, 219, 149, 0.07)',
	},
	transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
	navHeight: '60px',
	fontSizes: {
		xsmall: '12px',
		smallish: '13px',
		small: '14px',
		medium: '16px',
		large: '18px',
		xlarge: '20px',
		xxlarge: '22px',
		h3: '32px',
	},
	hamburgerWidth: 30,
	hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
	hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
	hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
	hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default Theme;
