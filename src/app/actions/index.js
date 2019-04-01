import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS';
export const SET_POST = 'SET_POST';

const url = 'https://jsonplaceholder.typicode.com';

export function getPosts() {
    return (dispatch) => {
        dispatch({
            type: GET_POSTS,
        });

        return axios.get(`${url}/posts`)
            .then(response => response.data)
            .then(posts => dispatch({
                type: SET_POSTS,
                payload: {
                    posts,
                },
            }))
            .catch(error => console.error(error));
    };
}

export function getPost(id) {
    return (dispatch) => {
        dispatch({
            type: GET_POSTS,
        });

        return axios.get(`${url}/posts/${id}`)
            .then(response => response.data)
            .then(post => dispatch({
                type: SET_POST,
                payload: {
                    ...post,
                },
            }))
            .catch(error => console.error(error));
    };
}
