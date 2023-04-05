import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import App from './App'
import Posts from './components/Posts/Posts'
import Comments from './components/Comments/Comments'
import Users from './components/Users/Users'
import Albums from './components/Albums/Albums'
import Default from './components/Default/Default'
import PostDetail from './components/PostDetail/PostDetail'
import CommentDetails from './components/CommentDetails/CommentDetails'
import UserDetails from './components/UserDetails/UserDetails'
import AlbumDetails from './components/AlbumDetails/AlbumDetails'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <App></App>
//   },
//   {
//     path : '/posts',
//     element : <Posts></Posts>
//   }, 
//   {
//     path : '/comments',
//     element : <Comments></Comments>
//   },
//   {
//     path : '/users', 
//     element : <Users></Users>
//   }
// ])


const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    children : [
      {
        path : '/',
        element : <Default></Default>
      },
      {
        path : '/posts',
        element : <Posts></Posts>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
      },
      {
        path : '/post/:postId',
        element : <PostDetail></PostDetail>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path : '/comments',
        element : <Comments></Comments>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/comments'),
      },
      {
        path : '/comments/:commentId',
        element : <CommentDetails></CommentDetails>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
      },
      {
        path : '/users',
        element : <Users></Users>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path : '/users/:userId',
        element : <UserDetails></UserDetails>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path : '/albums',
        element : <Albums></Albums>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/albums'),
      },
      {
        path : '/albums/:albumId',
        element : <AlbumDetails></AlbumDetails>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`)
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
