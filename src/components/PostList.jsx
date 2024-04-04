import Post from "./Post.jsx";
import classes from "./PostList.module.css"
import {URL_Base} from "../constant.js";
import {useLoaderData} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PostList() {
    const posts = useLoaderData();

    function addPostHandler(postData) {
        // setPosts([postData, ...posts]);
        fetch(URL_Base + '/posts', {
            method: 'post',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPosts(() => [postData, ...posts]);
    }

    return (
        <>
            { posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, index) => (
                        <Post key={index} author={post.author} body={post.author}/>
                    ))}
                </ul>
            )}

            { posts.length === 0 && (
                <div style={{textAlign: 'center'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    )
}