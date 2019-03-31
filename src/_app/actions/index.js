import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';

export function requestPosts() {
    return {
        type: REQUEST_POSTS,
    };
}

export function getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(posts => ({
            type: GET_POSTS,
            posts,
        }));
}

export function getPost(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.data)
        .then(post => ({
            type: GET_POST,
            post,
        }));
}
