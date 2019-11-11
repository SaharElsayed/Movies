import React from 'react';
import Helmet from 'react-helmet';

const TabTitle = ({ title }) => {
    var defaultTitle = 'Movie Library';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export default TabTitle;