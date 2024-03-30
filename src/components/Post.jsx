import classes from "./Post.module.css";

export default function Post(props) {
    return (
        <div className={classes.post}>
            <p className={classes.author} style={{color:"pink", textAlign:"center"}}>Author: { props.author }</p>
            <p className={classes.text}>Desc: { props.desc }</p>
        </div>
    );
}