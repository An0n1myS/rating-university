import { useGetRankingForGroupDataQuery } from "src/redux/api/apiRoot"

export const GroupRanking = () => {
  const {
    data
  } = useGetRankingForGroupDataQuery()


  return (
    <section>
      {data &&
        <table>
          <thead>
            <tr>
              <th>Група</th>
              <th>Студент</th>
              {Object.keys(data[Object.keys(data)[0]].students[0].grades)?.map((subjectName) => (
                <th key={subjectName}>{subjectName}</th>
              ))}
              <th>Рейтинг</th>
            </tr>
          </thead>
          <tbody>
            {data[Object.keys(data)[0]].students.map((student: any) => (
              <tr key={student.name}>
                <td className="min_table_column">{(Object.keys(data)[0])}</td>
                <td className="student">{student.name}</td>
                {Object.keys(student.grades).map((grade: any, index: number) => (
                  <td key={index}>{student.grades[grade]}</td>
                ))}
                <td className="min_table_column">{student.rating}</td>
              </tr>
            ))}
            {data[Object.keys(data)[1]].students.map((student: any) => (
              <tr key={student.name}>
                <td className="min_table_column">{(Object.keys(data)[1])}</td>
                <td className="student">{student.name}</td>
                {Object.keys(student.grades).map((grade: any, index: number) => (
                  <td key={index}>{student.grades[grade]}</td>
                ))}
                <td className="min_table_column">{student.rating}</td>
              </tr>
            ))}
            {data[Object.keys(data)[2]].students.map((student: any) => (
              <tr key={student.name}>
                <td className="min_table_column">{(Object.keys(data)[2])}</td>
                <td className="student">{student.name}</td>
                {Object.keys(student.grades).map((grade: any, index: number) => (
                  <td key={index}>{student.grades[grade]}</td>
                ))}
                <td className="min_table_column">{student.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </section>
  )
}

export default GroupRanking
