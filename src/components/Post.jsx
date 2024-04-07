import classes from "./Post.module.css";
import {Link} from "react-router-dom";

export default function Post(props) {
    return (
        <div className={classes.post}>
            <Link to={ "/posts/" + props.id }>
                <p className={classes.author} style={{color:"pink", textAlign:"center"}}>Author: { props.author }</p>
                <p className={classes.text}>body: { props.body }</p>
            </Link>
        </div>
    );
}