import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const SET_POST = 'SET_POST';

export function getPosts() {
    return (dispatch) => {
        dispatch({
            type: GET_POSTS,
        });

        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data)
            .then(posts => dispatch({
                type: SET_POSTS,
                payload: {
                    posts,
                },
            }));
    };
}

export function getPost(id) {
    return (dispatch) => {
        dispatch({
            type: GET_POSTS,
        });

        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.data)
            .then(post => dispatch({
                type: SET_POST,
                payload: {
                    ...post,
                },
            }));
    };
}
