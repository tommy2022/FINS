import React, { useState } from "react";
import { Card, Modal, Button, Dropdown } from "react-bootstrap";

// import { useParams } from "react-router-dom";

export default function WorkoutCard({
  id,
  title,
  distance,
  workoutType,
  subtitle,
  text,
  time,
}) {
  // const { id = "undefined" } = useParams();
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card
        onClick={handleClick}
        style={{ minWidth: "400px", margin: "10px", height: "300px" }}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
              >
                Workout Type:{" "}
              </div>
              <div>{workoutType}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
              >
                Distance in yards:{" "}
              </div>
              <div>{distance}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
              >
                Time in seconds:{" "}
              </div>
              <div>{time}</div>
            </div>
            <div
              style={{
                fontWeight: "bold",
                marginRight: "20px",
              }}
            >
              Description:{" "}
            </div>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ fontSize: "20px", color: "gray" }}>{subtitle}</div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                marginRight: "20px",
              }}
            >
              Workout Type:{" "}
            </div>
            <div>{workoutType}</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                marginRight: "20px",
              }}
            >
              Distance in yards:{" "}
            </div>
            <div>{distance}</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                marginRight: "20px",
              }}
            >
              Time in seconds:{" "}
            </div>
            <div>{time}</div>
          </div>
          <div
            style={{
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            Description:{" "}
          </div>
          {text}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
