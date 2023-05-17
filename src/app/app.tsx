import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"

import Layout from "src/layouts/Layout"
import AddStudent from "src/pages/AddStudent"
import GroupRanking from "src/pages/GroupRanking"
import Main from "src/pages/Main"
import Ranking from "src/pages/Ranking"
import Students from "src/pages/Students"
import Teachers from "src/pages/Teachers"

import { store } from "../redux"

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/ranking_for_group" element={<GroupRanking />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
