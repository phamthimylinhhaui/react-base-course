import Post from "./Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function PostList({ isPosting, onStopPosting })
{
    const [posts, setPosts] = useState([]);
    function addPostHandler(postData) {
        // setPosts([postData, ...posts]);
        fetch('http://localhost:8080/posts', {
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
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, index) => (
                        <Post key={index} author={post.author} body={post.author}/>
                    ))}
                </ul>
            )}

            {posts.length === 0 && (
                <div style={{textAlign: 'center'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    )
}