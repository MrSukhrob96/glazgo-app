import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routers'

const App: React.FC<any> = () => {

  return (
    <>
      <React.Suspense fallback={<>...</>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </>
  )
}

export default App
