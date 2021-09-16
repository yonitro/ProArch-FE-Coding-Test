import React, { ReactNode } from "react";
import { NotFoundBoundary } from "react-navi";
import { GlobalProvider } from "../../context/GlobalContext";
import { Header } from "../Header/Header";

import Error from "./Error";


interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

export default function Layout({ children, ...props }: IProps) {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.

  return (
    <div className="Layout">
      {/* This component shows a loading indicator after a delay */}

      <GlobalProvider>
        <Header />
        <div className="main">
          <NotFoundBoundary render={renderNotFound}>
            {children}
          </NotFoundBoundary>
        </div>
      </GlobalProvider>
    </div>
  );
}

function renderNotFound() {
  return (
    <div className="Layout-error">
      <Error />
    </div>
  );
}
