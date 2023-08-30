import React from 'react';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './../home';
import AboutPage from './../about';


interface IState {}
interface IProps {}

export default class MainLayout extends React.Component<IProps, IState> {
  override state: IState = {};

  override render() {
    return (
      <Router>
        <Routes>
          <Route index={true} element={<HomePage />} />
          <Route path="home">
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}
