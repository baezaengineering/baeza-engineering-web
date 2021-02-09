import React from 'react';
import Helmet from 'react-helmet';

const Head = () => {
	return (
		<Helmet>
			<html lang='en' prefix='og: http://ogp.me/ns#' />
		</Helmet>
	);
};

export default Head;
