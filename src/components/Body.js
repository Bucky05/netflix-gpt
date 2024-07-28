import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import VideoBackground from './VideoBackground'

const Body = () => {

  const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    },
    {
      path:'/browse/movie/:movieId',
      element:<VideoBackground/>
    }
  ]);

  
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
