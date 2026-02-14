import FrontendLayout from "../layout/FrontendLayout";
import Cart from "../views/Front/Cart";
import Home from "../views/Front/Home";
import NotFound from "../views/Front/NotFound";
import Products from "../views/Front/Products";
import SingleProducts from "../views/Front/SingleProduct";


const routes = [
  {
    path: '/',
    element: <FrontendLayout />,
    children: [
      {
        index: true, // 預設首頁
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <SingleProducts />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes