import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

// import { useParams } from "react-router-dom";

export default function Note({ title, subtitle, text }) {
  // const { id = "undefined" } = useParams();
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card
        onClick={handleClick}
        style={{
          width: "18rem",
          height: "18rem",
          margin: "2rem",
          backgroundColor: "#FFFFE0",
        }}
      >
        <Card.Body>
          <Card.Title contentEditable={true}>{title}</Card.Title>
          <Card.Subtitle contentEditable={true} className="mb-2 text-muted">
            {subtitle}
          </Card.Subtitle>
          <Card.Text contentEditable={true}>{text}</Card.Text>
        </Card.Body>
      </Card>
      {/* <Modal show={showModal} onHide={handleClose}>
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
      </Modal> */}
    </>
  );
}
