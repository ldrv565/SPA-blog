import * as React from 'react';
import classnames from 'classnames';

import './Button.scss';

const Button = props => (
    <button className={classnames('button', {[`--${props.modifier}`]: props.modifier})} type="button">
        {props.children}
    </button>
);

export default Button;
