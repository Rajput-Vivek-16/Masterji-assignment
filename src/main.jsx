import React from 'react'
import ReactDOM from 'react-dom/client'
import OtpForm from './OtpForm.jsx'
import DragDrop from './DragDrop.jsx'
import DataTable from './DataTable.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Routes} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Navigate to = "/otp-form" replace/>}/>
      <Route path='/otp-form' element={<OtpForm/>}/>
      <Route path='/course-list' element={<DragDrop/>}/>
      <Route path='/batches' element={<DataTable/>}/>
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
