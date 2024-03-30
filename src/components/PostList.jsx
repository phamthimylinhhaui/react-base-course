import Post from "./Post.jsx";
import classes from "./PostList.module.css"
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";

// eslint-disable-next-line react/prop-types
export default function PostList({ isPosting, onStopPosting })
{
    return (
        <>
            { isPosting &&
                <Modal onClose={onStopPosting} >
                    <NewPost
                        isCancel={onStopPosting}
                    />
                </Modal>
            }
            <ul className={classes.posts}>
                <Post author='author 2' desc='desc author2'/>
            </ul>
        </>
    )
}