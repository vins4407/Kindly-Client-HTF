import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import MyAdds from "../Pages/Dashboard/MyAdds";
import MyPurchase from "../Pages/Dashboard/MyPurchase";
import Home from "../Pages/Home/Home";
import AddDonation from "../Pages/Products/AddDonation";
import ProductDetail from "../Pages/Products/ProductDetail";
import RequireAuth from "./RequireAuth";
import ChatsPage from "../Pages/chat/ChatsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/products/:id',
                element: <ProductDetail />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APP_API_URL}/products/${params.id}`)
            },
            {
                path: '/add-donations',
                element: <RequireAuth><AddDonation /></RequireAuth>,
            },
            {
                path: '/myadds',
                element: <RequireAuth><MyAdds /></RequireAuth>,
            },
            {
                path: '/mypurchase',
                element: <RequireAuth><MyPurchase /></RequireAuth>,
            },
            {
                path: '/chat',
                element: <RequireAuth><ChatsPage /></RequireAuth>,
            },
        ]
    }
])

export default router;