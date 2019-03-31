import * as React from 'react';
import {Link} from 'react-router-dom';

import './Article.scss';

import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import Button from '../../components/Button/Button';

const Article = props => (
    <section className="container">
        {!props.fetching
            ? (
                <article className="article">
                    <section className="article__head">
                        <Title>
                            {props.post.title}
                        </Title>
                        <Meta>
                            {`MARCH ${props.post.id}, 2016 | TRAVEL`}
                        </Meta>
                        <Delimetr />
                    </section>
                    <section>
                        <Text modifier="note">
                            {props.post.body}
                        </Text>
                        <Title modifier="subtitle">
                            {props.post.title}
                        </Title>
                        <Text>
                            {props.post.body}
                        </Text>
                        <Title modifier="subtitle">
                            {props.post.title}
                        </Title>
                        <Text>
                            {props.post.body}
                        </Text>
                    </section>
                    <section className="article__footer">
                        <Link to="/home" className="nav__link">
                            <Button>View all posts</Button>
                        </Link>
                    </section>
                </article>
            )
            : <div>Загрузка...</div>}
    </section>
);

export default Article;
