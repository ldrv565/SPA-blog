import * as React from 'react';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

import Title from '../../components/Title/Title';
import Meta from '../../components/Meta/Meta';
import Text from '../../components/Text/Text';
import Delimetr from '../../components/Delimetr/Delimetr';
import Button from '../../components/Button/Button';

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
            <section className="container">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.state.posts.length < this.props.posts.length}
                    loader={<div key={0}>Loading...</div>}
                >
                    {
                        this.state.posts.map(post => (
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
                                        onClick={() => this.props.onClick(post.id)}
                                    >
                                        {'Countinue reading'}
                                    </Button>
                                </Link>
                                <Delimetr />
                            </article>
                        ))
                    }
                </InfiniteScroll>
            </section>
        );
    }
}

export default Articles;
