import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Spacing } from "shared/styles/styles"
import { Person } from "shared/models/person"
import { StudentListTile } from "staff-app/components/student-list-tile/student-list-tile.component"

export const ActivityPage: React.FC = () => {
  const [students, setStudents] = useState<Person[]>([]);

  useEffect(() => {
    const str = localStorage.getItem("updatedStudents");
    if (str) {
      setStudents(JSON.parse(str));
    }
  }, []);

  console.log(students);

  return <S.Container>
    <h1>Activity Page</h1>
    {
      students.map(student => <StudentListTile student={student}/>)
    }
  </S.Container>
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: ${Spacing.u4} auto 0;
  `,
}
