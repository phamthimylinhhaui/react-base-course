import Post from "./Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import { useState, useEffect } from "react";
import {URL_Base} from "../constant.js";

// eslint-disable-next-line react/prop-types
export default function PostList({ isPosting, onStopPosting })
{
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            setIsFetching(true);
            const res = await fetch(URL_Base +'/posts');
            const resData = await res.json();
            setPosts(resData.posts)
            setIsFetching(false);
        }

        fetchPost();
    }, []);

    const [posts, setPosts] = useState([]);
    function addPostHandler(postData) {
        // setPosts([postData, ...posts]);
        fetch(URL_Base +'/posts', {
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
            { isPosting &&
                <Modal onClose={onStopPosting} >
                    <NewPost
                        isCancel={onStopPosting}
                        addPost={addPostHandler}
                    />
                </Modal>
            }

            { !isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, index) => (
                        <Post key={index} author={post.author} body={post.author}/>
                    ))}
                </ul>
            )}

            { !isFetching && posts.length === 0 && (
                <div style={{textAlign: 'center'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}

            { isFetching && (
                <div style={{textAlign: 'center'}}>
                    <p>Loading post ...</p>
                </div>
            )}
        </>
    )
}