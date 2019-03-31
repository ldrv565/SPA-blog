import * as React from 'react';
import {Link} from 'react-router-dom';

import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import Button from '../../components/Button/Button';

const Articles = props => (
    <section className="container">
        {!props.fetching && props.posts.length
            ? props.posts.map(post => (
                <article key={post.id}>
                    <Title>
                        {post.title}
                    </Title>
                    <Meta>
                        {`MARCH ${post.id}, 2016 | TRAVEL`}
                    </Meta>
                    <Text>
                        {post.body}
                    </Text>
                    <Link to={`/article/${post.id}`} className="nav__link">
                        <Button
                            modifier="rounded"
                            onClick={() => props.onClick(post.id)}
                        >
                            {'Countinue reading'}
                        </Button>
                    </Link>
                    <Delimetr />
                </article>
            ))
            : <div>Загрузка...</div>
        }
    </section>
);

export default Articles;
