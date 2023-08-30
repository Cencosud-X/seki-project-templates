import React from 'react';

import { RoutedProps, withRouter } from '../../components/router';
import { Link } from 'react-router-dom';

interface IState {}
interface IRouteParams {}
interface IRouteLocation {}
interface IProps extends RoutedProps<IRouteParams, IRouteLocation> {}

export default withRouter(
  class RootPage extends React.Component<IProps, IState> {
    override state: IState = {};

    override render() {
      return (
        <>
          <span>Welcome to Seki!</span>
          <br />
          <br />
          <Link to={'/home/about'}>About</Link>
        </>
      );
    }
  }
);
