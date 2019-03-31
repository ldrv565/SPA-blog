import * as React from 'react';

import './Article.scss';

import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import LinkButton from '../../components/LinkButton/LinkButton';

const Article = props => (
    <section className="container">
        {!props.fetching && props.post.title
            ? (
                <article className="article">
                    <section className="article__head">
                        <Title>
                            {props.post.title}
                        </Title>
                        <Meta id={props.post.id} />
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
                        <LinkButton link="/home">View all posts</LinkButton>
                    </section>
                </article>
            )
            : <div>Loading...</div>}
    </section>
);

export default Article;
