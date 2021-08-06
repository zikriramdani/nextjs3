
import * as React from "react";
import { Modal } from "react-bootstrap";

type Props = {
    show: any;
    onHide: any;

    title: any;
    content: any;
    // button: any;
}

const Modals: React.FC<Props> = ({ show, onHide, title, content }) => {
    return (
        <Modal show={show} onHide={onHide} animation={false} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" >
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer>
                {/* {button} */}
            </Modal.Footer>
        </Modal>
    );
}

export default Modals;