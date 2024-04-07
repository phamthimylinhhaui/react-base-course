import classes from '../components/NewPost.module.css';
import Modal from "../components/Modal.jsx";
import {Link, Form, redirect} from "react-router-dom";
import {URL_Base} from "../constant.js";

function NewPost(props) {
    return (
        <Modal>
            <Form className={classes.form} method="post" >
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required />
                </p>
                <p className={classes.actions}>
                    <Link to="/" type="button" onClick={props.isCancel}>cancel</Link>
                    <button>submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action(data) {
    const formData = await  data.request.formData();
    const postData = Object.fromEntries(formData);
    console.log(postData);
    fetch(URL_Base + '/posts', {
        method: 'post',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return redirect('/');
}