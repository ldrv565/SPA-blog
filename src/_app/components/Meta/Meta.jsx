import * as React from 'react';

import Text from '../Text/Text';

const Meta = props => (
    <Text modifier="meta">
        {props.children}
    </Text>
);

export default Meta;
