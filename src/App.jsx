import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./views/Footer/Footer";
import { Header } from "./views/Header/Header";
import { useEffect } from "react";
import { fetchAccessKey } from "./store/auth/authSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalog } from "./views/Catalog/Catalog";
import { Goods } from "./views/Goods/Goods";
import { Container } from "./views/Container/Container";
import { Cart } from "./views/Cart/Cart";
import { Card } from "./components/Card/Card";
import { NotFound } from "./views/NotFound/NotFound";
import { FavoritePage } from "./views/FavoritePage/FavoritePage";
import { Order } from "./components/Order/Order";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/favorite",
    element: (
      <>
        <FavoritePage />
      </>
    ),
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Breadcrumbs />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Breadcrumbs />
          <Card />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/order/:orderId",
    element: (
      <>
        <Header />
        <main>
          <Order />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <main>
          <NotFound />
        </main>
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { accessKey, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessKey) {
      dispatch(fetchAccessKey());
    }
  }, [dispatch, accessKey]);

  if (loading) {
    return (
      <Container>
        <div>Загрузка...</div>
      </Container>
    );
  }

  return <RouterProvider router={router} />;
};

export default App;
