import React from 'react';

import { IExtensionContextData, ExtensionSDK } from '@team_seki/extension-sdk'
import { ConfigProvider, Spin, theme } from 'antd';

interface IProps {
  onLoadComplete: (data: IExtensionContextData) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

export default class BootingPage extends React.Component<IProps, IState> {

  extensionId = '{{data.settings.extensionId}}'

  override componentDidMount() {
    const { onLoadComplete } = this.props;

    new ExtensionSDK(this.extensionId).notifyLoaded()
    window.addEventListener('message', (e: MessageEvent<IExtensionContextData>) => {
      if (this.extensionId == e.data.extensionId) { // the message is addressed to this extension
        if (!e.data.productName || !e.data.authToken) {
          console.log('receiving incomplete or invalid message')
          return;
        }

        onLoadComplete(e.data)
      }
    })
  }

  override render() {
    return (
      <ConfigProvider
      theme={ { algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#df1a5f'
        }
      } }>
      <div style={ {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80
        } }>
        <Spin size='large' tip='Cargando...' />
      </div>
      </ConfigProvider>
    )
  }
}
