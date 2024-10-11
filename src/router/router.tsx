import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MainPages from "../ComponentsForMainPage/MainPages";
import { lazy } from "react";
import HelperLoaderLayoutComponent from "./HelperLoaderLayoutComponent/HelperLoaderLayoutComponent";

const BlogPages = lazy(() => import("./../ComponentsForBlogPage/BlogPage"));
const Contacts_Us = lazy(
  () => import("./../ComponentsForContactsUsPage/ContactsUs"),
);
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
  
      <HelperLoaderLayoutComponent>
        <BlogPages />
      </HelperLoaderLayoutComponent>
     
    ),
    errorElement: <div>ErrorOfMain</div>,
  },
  {
    path: "/Contact_Us",
    element: (
      <HelperLoaderLayoutComponent>
        <Contacts_Us />
      </HelperLoaderLayoutComponent>
    ),
    errorElement: <div>"ErrorOfMain"</div>,
  },
];

export const route = createBrowserRouter(routers);
