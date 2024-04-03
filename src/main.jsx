import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost from "./components/NewPost.jsx";
import RootLayout from "./routers/RootLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>,
        children: [
            {path: '/', element: <App/>},
            {path: '/post/create', element: <NewPost/>}
        ]
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
