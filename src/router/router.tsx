import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MainPages from "../ComponentsForMainPage/MainPages";
import { lazy, Suspense } from "react";

const BlogPages = lazy(() => import("./../ComponentsForBlogPage/BlogPage"));
const Contacts_Us = lazy(
  () => import("./../ComponentsForContactsUsPage/ContactsUs"),
);
const Load = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Loading....</h2>
      </div>
    </>
  );
};
const routers = [
  {
    element: (
      <MainLayout>
        <MainPages />
      </MainLayout>
    ),
    path: "/",
    errorElement: <div>"ErrorOfMain"</div>,
  },
  {
    path: "/blogpage",
    element: (
      <Suspense fallback={<Load />}>
        <MainLayout>
          <BlogPages />
        </MainLayout>
      </Suspense>
    ),
    errorElement: <div>ErrorOfMain</div>,
  },
  {
    path: "/Contact_Us",
    element: (
      <Suspense fallback={<Load />}>
        <MainLayout>
          <Contacts_Us />
        </MainLayout>
      </Suspense>
    ),
    errorElement: <div>"ErrorOfMain"</div>,
  },
];

export const route = createBrowserRouter(routers);
