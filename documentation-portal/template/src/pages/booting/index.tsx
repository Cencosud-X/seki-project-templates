import React from 'react';
import styles from './index.module.css';

interface IProps {
  onLoadComplete: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}


export default class BootingPage extends React.Component<IProps, IState> {
  
  override componentDidMount() {
    const { onLoadComplete } = this.props;
    this.startWarmUp(onLoadComplete);
  }

  startWarmUp(onFinish: () => void) {
    // Put here the booting logic

    onFinish();
  }

  override render() {
    return (
      <div className={styles.root}>
        <div className={styles.root__content}>
            <span>Loading</span>
        </div>
      </div>
    );
  }
}
