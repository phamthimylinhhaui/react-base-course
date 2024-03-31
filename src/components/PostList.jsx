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
            <ul className={classes.posts}>
                <Post author='author 2' desc='desc author2'/>
            </ul>
        </>
    )
}