import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddForm, OtherForm, ProjectForm, AddWithProjectForm, OtherWithProjectForm } from './forms'


const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<App />} />
        <Route path="project" element={<ProjectForm />}/>
        <Route path="add" element={<AddForm />}/>
        <Route path="other" element={<OtherForm />}/>
        <Route path="add-with-project" element={<AddWithProjectForm />}/>
        <Route path="other-with-project" element={<OtherWithProjectForm />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      {router}
  </React.StrictMode>,
)
