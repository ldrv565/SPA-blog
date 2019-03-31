import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';

export function getPosts() {
    return (dispatch) => {
        dispatch({
            type: REQUEST_POSTS,
        });

        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data)
            .then(posts => dispatch({
                type: GET_POSTS,
                posts,
            }));
    };
}

export function getPost(id) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_POSTS,
        });

        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.data)
            .then(post => dispatch({
                type: GET_POST,
                post,
            }));
    };
}
