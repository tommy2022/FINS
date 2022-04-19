import React, { useState } from "react";
import WorkoutCard from "./athelete-components/workout_card";
import AthleteChart from "./athelete-components/athlete_chart";
import Note from "./athelete-components/note";
import { Card, Button, Modal, Dropdown } from "react-bootstrap";
import Nav from "./Nav";

// import { useParams } from "react-router-dom";

export default function Athlete() {
  // const { id = "undefined" } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showNoteModal, setNoteModal] = useState(false);
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleClickNote = () => setNoteModal(true);
  const handleNoteClose = () => setNoteModal(false);
  const [workoutType, setWorkoutType] = useState("Freestyle stroke");
  const [ddistance, setDdistance] = useState("");
  const [ttitle, setTtitle] = useState("Workout");
  const [ssubtitle, setSsubtitle] = useState("01/06/2022 10pm");
  const [ddescription, setDescription] = useState("Add your description here");
  const [time, setTime] = useState("");

  const handleAdd = () => {
    console.log(ttitle, ssubtitle, ddescription);
    setWorkoutData(
      [
        {
          title: ttitle,
          subtitle: ssubtitle,
          text: ddescription,
          workoutType: workoutType,
          distance: ddistance,
          time: time,
        },
      ].concat(workoutData)
    );
    handleClose();
  };

  const [workoutData, setWorkoutData] = useState([
    {
      id: 1,
      title: "Workout",
      subtitle: "01/10/2022 1pm",
      distance: "100",
      time: "50",
      workoutType: "Freestyle stroke",
      text: "I did freestyle stroke for 100m",
    },
    {
      id: 2,
      title: "Workout",
      subtitle: "01/08/2022 2pm",
      workoutType: "Butterfly stroke",
      distance: "50",
      text: "I did butterfly stroke for 200m",
      time: "120",
    },
    {
      id: 3,
      title: "Workout",
      subtitle: "01/06/2022 10pm",
      workoutType: "Backstroke stroke",
      distance: "200",
      text: "I did backstroke for 300m",
      time: "300",
    },
    {
      id: 4,
      title: "Workout",
      subtitle: "01/03/2022 0pm",
      workoutType: "Freestyle stroke",
      distance: "100",
      text: "I did freestyle stroke for 300m",
      time: "240",
    },
  ]);

  const title = "Workout";
  const subtitle = "02/06/2022 5pm";

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "2rem",
      }}
    >
      <Nav />
      <Card
        style={{
          backgroundColor: "#F4F4F4",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div width="150px"></div>
          <h1>Workout History</h1>
          <Button onClick={handleClick}>Add Workout</Button>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <input
                style={{ border: 0, fontSize: "24px", color: "black" }}
                onChange={(e) => {
                  setTtitle(e.target.value);
                }}
                value={ttitle}
              ></input>
            </Modal.Header>
            <Modal.Body>
              <input
                style={{ border: 0, fontSize: "20px", color: "grey" }}
                onChange={(e) => {
                  setSsubtitle(e.target.value);
                }}
                value={ssubtitle}
              ></input>
            </Modal.Body>
            <Modal.Body>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    marginRight: "10px",
                    border: 0,
                    fontSize: "18px",
                    color: "black",
                    marginBottom: "10px",
                  }}
                >
                  Workout type:
                </div>
                <Dropdown>
                  <Dropdown.Toggle variant="grey" id="dropdown-basic">
                    {workoutType}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={() => {
                        setWorkoutType("Freestyle stroke");
                      }}
                    >
                      Freestyle stroke
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => {
                        setWorkoutType("Backstyle stroke");
                      }}
                    >
                      Backstyle stroke
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => {
                        setWorkoutType("Butterfly stroke");
                      }}
                    >
                      Butterfly stroke
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    marginRight: "10px",
                    border: 0,
                    fontSize: "18px",
                    color: "black",
                  }}
                >
                  Distance in yards:
                </div>
                <input
                  style={{ border: 0, fontSize: "18px", color: "grey" }}
                  placeholder={"Add your distance"}
                  value={ddistance}
                  onChange={(e) => {
                    setDdistance(e.target.value);
                  }}
                ></input>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    marginRight: "10px",
                    border: 0,
                    fontSize: "18px",
                    color: "black",
                  }}
                >
                  Time in seconds:
                </div>
                <input
                  style={{ border: 0, fontSize: "18px", color: "grey" }}
                  placeholder={"Add your time"}
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                ></input>
              </div>
              <div
                style={{
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    marginRight: "10px",
                    border: 0,
                    fontSize: "18px",
                    color: "black",
                  }}
                >
                  Description:
                </div>
                <input
                  style={{ border: 0, fontSize: "18px", color: "grey" }}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder={ddescription}
                ></input>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAdd}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            overflow: "scroll",
          }}
        >
          {workoutData.map((w) => (
            <WorkoutCard
              id={w.id}
              title={w.title}
              subtitle={w.subtitle}
              text={w.text}
              workoutType={w.workoutType}
              distance={w.distance}
              time={w.time}
            ></WorkoutCard>
          ))}
        </div>
      </Card>
      <Card
        style={{
          marginTop: "2rem",
          backgroundColor: "#F4F4F4",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h1>ATHLETE PROGRESSION</h1>
          <AthleteChart />
        </div>
      </Card>
      <Card
        style={{
          marginTop: "2rem",
          backgroundColor: "#F4F4F4",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ minWidth: "100px" }}></div>
            <h1>SWIMMER NOTES</h1>
            <Button onClick={handleClickNote} style={{ marginLeft: "200px" }}>
              Add Note
            </Button>
            <Modal show={showNoteModal} onHide={handleNoteClose}>
              <Modal.Header closeButton>
                <input
                  style={{ border: 0, fontSize: "24px", color: "black" }}
                  onChange={(e) => {
                    setTtitle(e.target.value);
                  }}
                  placeholder={"Add your note title here"}
                ></input>
              </Modal.Header>
              <Modal.Body>
                <input
                  style={{ border: 0, fontSize: "20px", color: "grey" }}
                  onChange={(e) => {
                    setSsubtitle(e.target.value);
                  }}
                  value={ssubtitle}
                ></input>
              </Modal.Body>
              <Modal.Body>
                <input
                  style={{ border: 0, fontSize: "20px", color: "grey" }}
                  onChange={(e) => {
                    setSsubtitle(e.target.value);
                  }}
                  placeholder={"Add your note here"}
                ></input>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleNoteClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleAdd}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Note
            title={"Note 1"}
            subtitle={"01/10/2022 1pm"}
            text={"I'm in good shape i think"}
          />
          <Note
            title={"Note 2"}
            subtitle={"01/08/2022 3pm"}
            text={"I got really tired"}
          />
          <Note
            title={"Note 3"}
            subtitle={"01/06/2022 5pm"}
            text={"I need to improve this"}
          />
          <Note
            title={"Note 5"}
            subtitle={"01/02/2022 10am"}
            text={"I'm trying this new technique"}
          />
        </div>
      </Card>
    </div>
  );
}
