import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Hello World</h1>
    },
    {
        path: '/articles',
        element: <h1 className="text-xl font-bold">Articles</h1>
    }
])

export default router