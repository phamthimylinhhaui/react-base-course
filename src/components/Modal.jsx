import classes from "./Modal.module.css";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Modal({ children })
{
    const navigate = useNavigate();
    function closeHandle() {
        navigate('..');
    }
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandle}></div>
            <dialog open={true} className={classes.modal}>
                { children }
            </dialog>
        </>
    );
}