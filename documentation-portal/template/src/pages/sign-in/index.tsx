import React from 'react';
import styles from './index.module.css';

interface IProps {
  onAuthenticated: (provider: string) => void;
}

interface IState {}

export default class SignInPage extends React.Component<IProps, IState> {
  onDeepLinkSSOCallbackHandler = async (provider: string) => {
    const { onAuthenticated } = this.props;
    onAuthenticated(provider);
  };

  onAuthenticateHandler = async () => {
    this.onDeepLinkSSOCallbackHandler('custom');
  };

  override render() {
    return (
      <div className={styles.root}>
        <div className={styles.root_centered}>
          <b>LOGIN PAGE</b>
          <i>This page is the login page ant it will visible if you aren`t authenticated ^^</i>
          <br />
          <br />
          <br />
          <button
            className={styles.login_with_custom}
            onClick={this.onAuthenticateHandler}
          >
            Autenticar
          </button>
        </div>
      </div>
    );
  }
}
