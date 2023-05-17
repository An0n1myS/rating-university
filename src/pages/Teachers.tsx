import { useGetTeachersDataQuery } from "src/redux/api/apiRoot";

export const Teachers = () => {
  const {
    data
  } = useGetTeachersDataQuery()

  return (
    <section>
      <div className="content">
        <h1>Список вчителів та їх предметів</h1>
        {data && Object.entries(data).map(([teacher_name, subjects]: any) => (
          <div key={teacher_name}>
            <h2>{teacher_name}</h2>
            <ul>
              {subjects.map((subject_name: any, index: any) => (
                <li key={index}>{subject_name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Teachers
