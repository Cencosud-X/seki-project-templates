import React from 'react';

import './themes/default.css';

import BootingPage from './pages/booting';
import SignInPage from './pages/sign-in';

interface IProps {}
interface PageState {
  booting: boolean;
  authenticated: boolean;
  layout?: React.ComponentClass;
}

export default class App extends React.Component<IProps, PageState> {
  override state: PageState = {
    // Just for pre-boot that we really need
    // before other clients
    booting: true,
    authenticated: false,
  };

  onBootCompleteHandler = async () => {
    // Dynamic Import of the Main Layout 
    // after, all booting ocurrs
    const MainLayout = (await import('./pages/layout')).default;

    this.setState({
      booting: false,
      layout: MainLayout,
    });
  };

  onAuthenticatedHandler = async () => {
    this.setState({
      authenticated: true,
    });
  };


  override render() {
    const { booting, authenticated, layout } = this.state;

    if (booting) {
      return <BootingPage onLoadComplete={this.onBootCompleteHandler} />;
    }

    if (!authenticated) {
      return <SignInPage onAuthenticated={this.onAuthenticatedHandler} />;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const MainLayout = layout!;
    return <MainLayout />;
  }
}
