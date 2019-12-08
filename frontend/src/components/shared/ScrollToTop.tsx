import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";

const ScrollToTop: React.FC<RouteComponentProps> = ({ children, history }) => {
  useEffect(() => {
    return () => {
      history.listen(() => {
        window.scrollTo(0, 0);
      });
    };
  });

  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(ScrollToTop);
