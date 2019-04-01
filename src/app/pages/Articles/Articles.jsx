import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Content from '../../components/Content/Content';
import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import LinkButton from '../../components/LinkButton/LinkButton';

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };

        this.partLength = 10;
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        const currentCount = this.state.posts.length;
        this.setState(prevState => ({
            posts: [
                ...prevState.posts,
                ...this.props.posts.slice(currentCount, currentCount + this.partLength),
            ],
        }));
    }

    render() {
        return (
            <Content>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.state.posts.length < this.props.posts.length}
                    loader={<div key={0}>Loading...</div>}
                >
                    {
                        this.state.posts.map(post => (
                            <article key={post.id}>
                                <Title h={2}>
                                    {post.title}
                                </Title>
                                <Meta id={post.id} />
                                <Text>
                                    {post.body}
                                </Text>
                                <LinkButton link={`/post/${post.id}`} modifier="rounded">
                                    {'Countinue reading'}
                                </LinkButton>
                                <Delimetr />
                            </article>
                        ))
                    }
                </InfiniteScroll>
            </Content>
        );
    }
}

export default Articles;
