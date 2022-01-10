import PersonContext from "./PersonContext";
import {useContext} from "react";

// Hook 사용
export default function Example3(){
  const persons = useContext(PersonContext);

  return (
    <ul>
      {persons.map(person => (
          <li>{person.name}</li>
      ))}
    </ul>
  )

}