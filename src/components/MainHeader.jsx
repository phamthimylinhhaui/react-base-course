import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
// eslint-disable-next-line react/prop-types
export default function MainHeader({onCreatePost})
{
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage></MdMessage>
                React Poster
            </h1>
            <p>
                <button className={classes.button} onClick={onCreatePost}>
                    <MdPostAdd size={18}></MdPostAdd>
                    New Post
                </button>
            </p>
        </header>
    );
}