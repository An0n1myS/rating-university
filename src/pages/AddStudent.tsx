import { useGetAddStudentsDataQuery, usePostFormAddStudentDataMutation } from "src/redux/api/apiRoot"

export const AddStudent = () => {
  const {
    data
  } = useGetAddStudentsDataQuery()

  const [postForm] = usePostFormAddStudentDataMutation()

  return (
    <div>
      {data &&
        <>
          <h2 className="page_title">Додати нового студента</h2>
          <form onSubmit={(e) => { e.preventDefault(); postForm(e.target) }}>
            <div className="form-group">
              <label htmlFor="name">Имя студента:</label>
              <input type="text" id="name" name="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="group">Группа:</label>
              <select id="group" name="group" className="form-control">
                {data?.groups?.map((group: any) => (
                  <option key={group[0]} value={group[0]}>{group[1]}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subjects">Оценки:</label>
              {data?.subjects?.map((subject: any) => (
                <div className="input-group" key={subject[0]}>
                  <label htmlFor={`subject${subject[0]}`}>{subject[1]}:</label>
                  <input type="number" id={`subject${subject[0]}`} name="grades[]" className="form-control" min="50" max="100" required />
                  <input type="hidden" name="subject_ids[]" value={subject[0]} />
                </div>
              ))}
            </div>
            <button type="submit" className="btn btn-primary">Додати студента</button>
          </form>
        </>
      }
    </div>
  )
}

export default AddStudent
