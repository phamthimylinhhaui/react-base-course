import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, { loader as PostLoader } from './routers/Posts.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewPost, { action as addNewPost } from "./routers/NewPost.jsx";
import RootLayout from "./routers/RootLayout.jsx";
import PostDetail, { loader as postDetailLoader } from "./routers/PostDetail.jsx";
import Courses from './routers/Courses.jsx'

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <Posts/>,
                children: [
                    {
                        path: '/create-post',
                        element: <NewPost/>,
                        action: addNewPost
                    },
                    {
                        path: '/posts/:id',
                        element: <PostDetail/>,
                        loader: postDetailLoader
                    }
                ],
                loader : PostLoader
            },
            {
                path: '/courses',
                element: <Courses/>
            }
        ]
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
