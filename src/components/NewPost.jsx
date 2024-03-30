import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost(props) {

    const [enteredBody, setEnteredBody] = useState('') //init state
    function changeBodyHandler(e) {
        setEnteredBody(e.target.value);
    }

    const [enteredAuthor, setEnteredAuthor] = useState('') //init state
    function changeAuthorHandler(e) {
        setEnteredAuthor(e.target.value);
    }
    function submitHandler(e) {
        e.preventDefault();
        const post = {
            author: enteredAuthor,
            body: enteredBody,
        }
        props.isCancel();
        console.log(post)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={changeAuthorHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={props.isCancel}>cancel</button>
                <button>submit</button>
            </p>
        </form>
    );
}

export default NewPost;