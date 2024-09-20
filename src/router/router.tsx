import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MainPages from "../ComponentsForMainPage/MainPages";
import BlogPage from "../ComponentsForBlogPage/BlogPage";
import ContactsUs from "../ComponentsForContactsUsPage/ContactsUs";

const routers = [
  {
    element: (
      <MainLayout>
        <MainPages />
      </MainLayout>
    ),
    path: "/",
    errorElement: "ErrorOfMain",
  },
  {
    path: "/blogpage",
    element: <MainLayout><BlogPage/></MainLayout>,
    errorElement: "ErrorOfBlog",
  },
  {
    path:'/Contact_Us',
    element: <MainLayout><ContactsUs/></MainLayout>,
    errorElement: "ErrorContactUs",
  }
];

export const route = createBrowserRouter(routers);
