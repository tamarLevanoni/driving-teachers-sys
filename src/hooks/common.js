import { useContext } from "react";
import StudentsContext from "../contexts/StudentsContext";

export function useStudentsState() {
  return useContext(StudentsContext);
}
