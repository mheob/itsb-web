import { FC, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const ScrollToTop: FC<RouteComponentProps> = ({ children, history }) => {
  useEffect(() => {
    return () => {
      history.listen(() => {
        window.scrollTo(0, 0);
      });
    };
  });

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
