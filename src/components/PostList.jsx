import Post from "./Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";

// eslint-disable-next-line react/prop-types
export default function PostList({ isPosting, onStopPosting })
{
    const [enteredBody, setEnteredBody] = useState('') //init state
    function changeBodyHandler(e) {
        setEnteredBody(e.target.value);
    }

    const [enteredAuthor, setEnteredAuthor] = useState('') //init state
    function changeAuthorHandler(e) {
        setEnteredAuthor(e.target.value);
    }

    return (
        <>
            { isPosting &&
                <Modal onClose={onStopPosting} >
                    <NewPost onBodychange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
                </Modal>
            }
            <ul className={classes.posts}>
                <Post author={enteredAuthor} desc={enteredBody}/>
                <Post author='author 2' desc='desc author2'/>
            </ul>
        </>
    )
}