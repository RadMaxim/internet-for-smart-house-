import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./router/router.tsx";
// import { QueryClientProvider } from "react-query";
// import { queryCl } from "./ComponentsForBlogPage/section2/BlogSection2.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
);
