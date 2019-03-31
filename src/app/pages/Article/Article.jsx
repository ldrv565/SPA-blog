import * as React from 'react';

import './Article.scss';

import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import LinkButton from '../../components/LinkButton/LinkButton';

class Article extends React.PureComponent {
    componentDidMount() {
        const {postId} = this.props.match.params;
        this.props.getPost(postId);
    }

    render() {
        return (
            <section className="container">
                {!this.props.fetching
                    ? (
                        <article className="article">
                            <section className="article__head">
                                <Title>
                                    {this.props.post.title}
                                </Title>
                                <Meta id={this.props.post.id} />
                                <Delimetr />
                            </section>
                            <section>
                                <Text modifier="note">
                                    {this.props.post.body}
                                </Text>
                                <Title modifier="subtitle">
                                    {this.props.post.title}
                                </Title>
                                <Text>
                                    {this.props.post.body}
                                </Text>
                                <Title modifier="subtitle">
                                    {this.props.post.title}
                                </Title>
                                <Text>
                                    {this.props.post.body}
                                </Text>
                            </section>
                            <section className="article__footer">
                                <LinkButton link="/">View all posts</LinkButton>
                            </section>
                        </article>
                    )
                    : <div>Loading...</div>}
            </section>
        );
    }
}

export default Article;
