// import classHelperLoaderLayoutComponent from './classHelperLoaderLayoutComponent.module.css'

import React, { Suspense } from "react";
import Loader from "../Loader/Loader";
import MainLayout from "../../Layout/MainLayout";
export interface HelperLoaderLayoutComponents {
  children: React.ReactNode;
}
const HelperLoaderLayoutComponent: React.FC<HelperLoaderLayoutComponents> = ({
  children,
}) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <MainLayout>{children}</MainLayout>
      </Suspense>
    </>
  );
};
export default HelperLoaderLayoutComponent;
