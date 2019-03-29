import * as React from 'react';

import './Button.scss';

const Button = props => (
    <button className="button" type="button">
        {props.children}
    </button>
);

export default Button;
