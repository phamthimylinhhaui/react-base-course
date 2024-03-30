import classes from "./Modal.module.css";

// eslint-disable-next-line react/prop-types
export default function Modal({ children, onClose })
{
    return (
        <>
            <div className={classes.backdrop} onClick={onClose}></div>
            <dialog open={true} className={classes.modal}>
                { children }
            </dialog>
        </>
    );
}