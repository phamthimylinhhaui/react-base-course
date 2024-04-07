import Post from "./Post.jsx";
import classes from "./PostList.module.css";
import {useLoaderData} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PostList() {
    const posts = useLoaderData();

    return (
        <>
            { posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body}/>
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