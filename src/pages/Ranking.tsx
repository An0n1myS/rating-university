/* eslint-disable no-unsafe-optional-chaining */
import { useGetRankingDataQuery } from "src/redux/api/apiRoot"


export const Ranking = () => {
  const {
    data,
    isSuccess
  } = useGetRankingDataQuery()

  console.log('first', data)
  console.log('sec', data?.students_sorted)
  console.log('thr', data?.students_sorted[0])

  return (
    <section>
      {data && isSuccess &&
        <>
          <h2>Рейтинг успішності студентів</h2>
          <table>
            <thead>
              <tr>
                <th className="student">Студент</th>
                {Object.keys(data?.students_sorted[0]?.grades)?.map((subjectName) => (
                  <th key={subjectName}>{subjectName}</th>
                ))}
                <th>Рейтинг</th>
              </tr>
            </thead>
            <tbody>
              {[...data?.students_sorted]?.sort((a: any, b: any) => b?.rating - a?.rating)?.map((subitem: any) => (
                <tr key={subitem?.name}>
                  <td>{subitem?.name}</td>
                  {Object.values(subitem?.grades).map((grade: any, index) => (
                    <td key={index}>{grade}</td>
                  ))}
                  <td>{subitem?.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      }
    </section>
  )
}

export default Ranking