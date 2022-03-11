import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

// import { useParams } from "react-router-dom";

export default function WorkoutCard({ title, subtitle, text }) {
  // const { id = "undefined" } = useParams();
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card onClick={handleClick} style={{ width: "18rem", marginTop: "2rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ fontSize: "20px", color: "gray" }}>{subtitle}</div>
          {text}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
