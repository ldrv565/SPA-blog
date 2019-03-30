import * as React from 'react';

import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import Button from '../../components/Button/Button';

const Articles = () => (
    <section className="container">
        <article>
            <Title>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </Title>
            <Meta>
                {'MARCH 2, 2016 | TRAVEL'}
            </Meta>
            <Text>
                {'Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum, suscipit commodo magna quam id felis. Morbi pulvinar venenatis elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex condimentum nec.'}
            </Text>
            <Button modifier="rounded">Countinue reading</Button>
            <Delimetr />
        </article>
        <article>
            <Title>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </Title>
            <Meta>
                {'MARCH 2, 2016 | TRAVEL'}
            </Meta>
            <Text>
                {'Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum, suscipit commodo magna quam id felis. Morbi pulvinar venenatis elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex condimentum nec.'}
            </Text>
            <Button modifier="rounded">Countinue reading</Button>
            <Delimetr />
        </article>
        <article>
            <Title>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </Title>
            <Meta>
                {'MARCH 2, 2016 | TRAVEL'}
            </Meta>
            <Text>
                {'Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum, suscipit commodo magna quam id felis. Morbi pulvinar venenatis elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex condimentum nec.'}
            </Text>
            <Button modifier="rounded">Countinue reading</Button>
            <Delimetr />
        </article>
    </section>
);

export default Articles;
