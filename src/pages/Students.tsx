import { useGetStudentsDataQuery } from "src/redux/api/apiRoot"

export const Students = () => {
  const {
    data
  } = useGetStudentsDataQuery()

  return (
    <section>
      {data && Object.entries(data).map(([groupName, group]: any) => (
        <div key={groupName}>
          <h2>Група {groupName}</h2>
          <table>
            <thead>
              <tr>
                <th>Студент</th>
                {Object.keys(group.students[0].grades).map((subjectName) => (
                  <th key={subjectName}>{subjectName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {group.students.map((student: any) => (
                <tr key={student.name}>
                  <td>{student.name}</td>
                  {Object.values(student.grades).map((grade: any) => (
                    <td key={grade}>{grade}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  )
}

export default Students
