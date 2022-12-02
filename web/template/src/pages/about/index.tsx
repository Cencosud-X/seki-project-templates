import React from 'react';
import { Link } from 'react-router-dom';

interface IState {}
interface IProps {}

export default class WelcomePage extends React.Component<IProps, IState> {
  override state: IState = {};

  override render() {
    return (
      <>
        About Seki
        <br />
        <br />
        <Link to={'/'}>Volver</Link>
      </>
    );
  }
}
