import { Collapse } from "antd";
import "./Student.css";
import img from "../../logo-woman.png";

const Student = ({ student }) => {
  const { firstName, lastName, numberOfLessons, payment } = student;
  // id, dateOfBirth, phoneNumber, emailAddress, Theory, numberOfLessons, testDate, pricePerLesson, internalTest, registrationFees, enteredSchool, payment}
  //   console.log(student);

  const { Panel } = Collapse;

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    // <Collapse expandIconPosition="right" accordion="true">
    <Panel
      header={
        <div className="student-panel">
          <div className="student-img">
            <img src={img} alt="profile img"></img>
          </div>
          <div className="student-name">{`${firstName} ${lastName}`}</div>
          <div className="student-num-lessons">
            {numberOfLessons}
            <span>שיעורים</span>
          </div>
          <div className="student-payment">{payment}₪</div>
        </div>
      }
      key="1"
    >
      <p>{text}</p>
    </Panel>
    /* <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
    </Panel> */
    // </Collapse>
  );
};

export default Student;
