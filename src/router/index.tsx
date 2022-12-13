import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { Preview } from "../component/preview";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [{ index: true, element: <Preview /> }]
    }
])

export default router