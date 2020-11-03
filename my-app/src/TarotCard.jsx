import React, {useState} from 'react';
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TarotCard = ({card}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return card === false ? (<div></div>) : (
    <div className="one-card">
      <h5>{card.name}</h5>
      <Image className="card-pic"
        src={card.url}
        width="240px"
        height="390px"/>
      <br></br>
      <Button id="addq-btn"variant="outline-dark" size="md"
        onClick={handleShow}
      >click for more
      </Button>
      <Modal
        centered
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="card-modal">
            <h6>{card.name}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{card.desc}</p>
          <p><span>Light: </span>{card.meaning_up}</p>
          <p><span>Shadow: </span> {card.meaning_rev}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TarotCard;
