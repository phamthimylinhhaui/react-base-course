import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function MainHeader()
{
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage></MdMessage>
                React Poster
            </h1>
            <p>
                <Link to="/create-post" className={classes.button} >
                    <MdPostAdd size={18}></MdPostAdd>
                    New Post
                </Link>
            </p>
        </header>
    );
}