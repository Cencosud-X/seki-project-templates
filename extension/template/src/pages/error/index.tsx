import { ConfigProvider, Result } from 'antd'

interface IProps {
  message: string
}

const ErrorPage = ({message}: IProps) => {
  return (
    <ConfigProvider
      theme={ {
        token: {
          colorText: '#df1a5f',
        }
      } }>
      <Result
        title={message}
        icon={<img src="assets/not-found.svg" width={300} height={300} />}
      />
    </ConfigProvider>
  )
}

export default ErrorPage
