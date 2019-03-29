import * as React from 'react';
import classnames from 'classnames';

import './Title.scss';

const Title = props => (
    <h1 className={classnames(props.className, 'title', {[`--${props.modifier}`]: props.modifier})}>
        {props.children}
    </h1>
);

export default Title;
