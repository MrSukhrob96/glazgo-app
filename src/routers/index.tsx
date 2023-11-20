import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from "../modules/errors/notfound";
import HomePage from "../modules/home/home.component";
import { Outlet } from 'react-router-dom'

const routers = createBrowserRouter([
    {
        path: "/",
        element: <><Outlet /></>,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ]
    }
])

export default routers