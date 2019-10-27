import React from 'react';

import HeaderTop from './HeaderTop';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import elements from './elements';

export default () => {
    return(
        <React.Fragment>
            <HeaderTop />
            <HeaderLeft elements={elements} />
            <HeaderRight />
        </React.Fragment>
    )
}