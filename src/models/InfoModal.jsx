import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const InfoModal = (props) => {
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    const loginFunc = () => {

    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>{props.type}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='container d-flex flex-column w-50 p-1 justify-content-center'>
                            <p>Username</p>
                            <input placeholder='Username' ref={usernameInput} />
                        </div>
                        <div className='container d-flex flex-column w-50 p-1 justify-content-center'>
                            <p>Password</p>
                            <input placeholder='Password' ref={passwordInput} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={loginFunc}>
                        {props.type}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InfoModal;