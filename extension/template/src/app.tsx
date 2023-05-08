import React from 'react'

import { IExtensionContextData } from '@team_seki/extension-sdk'

import { ConfigProvider, Descriptions, Input, theme, Typography } from 'antd'
const { TextArea } = Input;
const { Title } = Typography;

import './themes/default.css'

import BootingPage from './pages/booting'
import ErrorPage from './pages/error'

import { AppContext } from './components/application-context'
import secrets from './config/secrets'

interface IProps {}
interface PageState {
  booting: boolean
  extensionContextData?: IExtensionContextData
  product?: string
  authToken?: string
}

export default class App extends React.Component<IProps, PageState> {
  override state: PageState = {
    booting: true
  }

  onBootCompleteHandler = async (data: IExtensionContextData) => {
    this.setState({
      booting: false,
      extensionContextData: data,
      product: data.productName,
      authToken: data.authToken
    })
  }

  override render() {
    const { booting, extensionContextData, product, authToken } = this.state


    if (booting) {
      return <BootingPage onLoadComplete={this.onBootCompleteHandler} />
    }

    if (!product || !authToken) {
      return <ErrorPage message='Error cargando el producto' />
    }

    const sekiSDKExample = `
    import { SekiSDK } from '@team_seki/extension-sdk'

    ...

    const seki = new SekiSDK(secrets.SEKI_API_URL, extensionContextData?.authToken)

    const repositoryInfo = seki.getProductRepository(extensionContextData?.productName)
    const cloudComponentSettings = seki.getCloudComponentSettings(extensionContextData?.productName, 'staging', 'mongodb', 'default')
    `

    const theWorkspace = extensionContextData?.workspace
    const theProjects = theWorkspace?.projects
    const theCloudComponents = theWorkspace?.cloud.components

    return (
      <AppContext.Provider value={ {secrets} } >
        <ConfigProvider
          theme={ { algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: '#df1a5f'
            }
          } }>
            <Title>Hello! This is a Seki extension!</Title>
            <Title level={5}>You can extend Seki in any way you want. The sky is the limit!</Title>

            <Descriptions column={4} title="">
              <Descriptions.Item label="The extension Id">{extensionContextData?.extensionId}</Descriptions.Item>
              <Descriptions.Item label="The current product">{extensionContextData?.productName}</Descriptions.Item>
            </Descriptions>

            <Title level={3}>Use the ContextData object to access workspace information:</Title>
            <TextArea
              rows={10}
              style={ {width: '80%'} }
              value={JSON.stringify(extensionContextData, null, 2)} />

            <Title level={4}>For instance, you could list the product maintainers({extensionContextData?.maintainers.length}):</Title>
            {extensionContextData?.maintainers.map(m =>
              <img title={m.login} src={m.avatar_url} style={ {height: '60px', width: '60px', padding: '10px'} } />)}

            <Title level={4}>... the projects({theProjects?.length}):</Title>
            <Title level={5}>{theProjects?.map(p=>
              <ol>{p.name}({p.configuration.kind})</ol>)}</Title>

            <Title level={4}>... and the cloud-components({theCloudComponents?.length}):</Title>
            <Title level={5}>{theCloudComponents?.map(cc=>
              <ol>{cc.kind}({cc.identifier})</ol>)}</Title>

            <Title level={3}>Use the Seki SDK to access the Seki API:</Title>
            <TextArea
              rows={10}
              style={ {width: '80%'} }
              value={sekiSDKExample} />

            <Title level={3}>Use cool ninja images to keep the Seki's mystic and style:</Title>
            <ErrorPage message='Show some message here' />

        </ConfigProvider>
      </AppContext.Provider>
    )
  }
}
