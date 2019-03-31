import {connect} from 'react-redux';

import {getPost} from '../actions';
import Articles from '../pages/Articles/Articles';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        fetching: state.fetching,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPost: id => dispatch(getPost(id)),
    };
}

const ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(Articles);

export default ArticlesContainer;
