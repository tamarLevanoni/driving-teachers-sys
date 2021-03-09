import { useStudentsState } from "../../hooks/common";
// import Student from "../Student/Student";
import "./Students.css";
import { Collapse } from "antd";
import img from "../../logo-woman.png";

const Students = () => {
  const [studentsList, setStudentsList] = useStudentsState();

  const { Panel } = Collapse;

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className="students">
      <h2 className="title-students">רשימת תלמידים</h2>
      <div className="collapse-container">
        <Collapse expandIconPosition="right" accordion="true">
          {studentsList.map(({ firstName, lastName, numberOfLessons, payment, id }) => (
            // <Student key={student.id} student={student} />
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
              key={id}
            >
              <p>{text}</p>
            </Panel>
          ))}
        </Collapse>
      </div>

      <footer id="footerStudents">{`סה"כ: ${studentsList.length} תלמידים`}</footer>
    </div>
  );
};

export default Students;
