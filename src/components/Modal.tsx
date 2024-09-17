
interface props {
    title: String,
    button: String,
    text: String,
    body: any,
    action: any
}

const Modal = (props: props) => {

    return (
        <div className="modal__overlay">
            <div className='modal'>
                <div className="modal__inf">
                    <div className="modal__top">
                        <div className="modal__title">{props.title}</div>
                        <div className="modal__close" onClick={() => {props.action(false)}}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9355 6.04661C20.2067 5.77541 20.2067 5.33571 19.9355 5.06451C19.6643 4.79332 19.2246 4.79332 18.9534 5.06451L12.5 11.5179L6.04658 5.06451C5.77538 4.79332 5.33568 4.79332 5.06448 5.06451C4.79328 5.33571 4.79328 5.77541 5.06448 6.04661L11.5179 12.5L5.06448 18.9534C4.79329 19.2246 4.79329 19.6643 5.06448 19.9355C5.33568 20.2067 5.77538 20.2067 6.04658 19.9355L12.5 13.4821L18.9534 19.9355C19.2246 20.2067 19.6643 20.2067 19.9355 19.9355C20.2067 19.6643 20.2067 19.2246 19.9355 18.9534L13.4821 12.5L19.9355 6.04661Z" fill="#BDBFC7" />
                            </svg>
                        </div>
                    </div>
                    <div className="modal__text">
                        {props.text}
                    </div>
                </div>
                <div className="modal__body">
                    {props.body}
                </div>
                <button onClick={() => {props.action(false)}} className='modal__btn'>
                    {props.button}
                </button>
            </div>
        </div>
    );
};

export default Modal;