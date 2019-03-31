import {connect} from 'react-redux';

import Article from '../pages/Article/Article';

function mapStateToProps(state) {
    return {
        post: state.post,
        fetching: state.fetching,
    };
}

const ArticleContainer = connect(mapStateToProps)(Article);

export default ArticleContainer;
