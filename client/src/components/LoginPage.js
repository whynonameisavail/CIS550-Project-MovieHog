import React from 'react';
import { Form, Button, Input, Space, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { login, sign_up } from '../fetcher'

class LoginPage extends React.Component {
    formRef = React.createRef();

    state = {
        loading: false
    }

    componentDidMount() {
      
    }

    onFinish = (values) => {
        console.log("finish form", values);
    };

    handleLogin = async () => {
        const formInstance = this.formRef.current;
 
        try {
          await formInstance.validateFields();
        } catch (error) {
          return;
        }
     
        this.setState({
          loading: true,
        });

        try {
          console.log('111111', formInstance.getFieldsValue(true))
          const {username, password} = formInstance.getFieldsValue(true)
          const input = {
            username : username,
            password : password
          }
          const result = await login(input)
          console.log(result)
          if (result && result.username !== null){
            message.success(`Welcome, ${result.username}`)
            window.localStorage.setItem('username', result.username)
            this.props.handleLogInSuccess()
          } else {
            message.error('Wrong username or password')
          }
          
        } catch (error) {
          message.error(`fail to login due to ${error.message}`)
        }

        this.setState({
            loading: false
        })
    }

    handleRegister = async () => {
        const formInstance = this.formRef.current;
 
        try {
          await formInstance.validateFields();
        } catch (error) {
          return;
        }
     
        try {
          const {username, password} = formInstance.getFieldsValue(true)
          const input = {
            username : username,
            password : password
          }
          const result = await sign_up(input)
          console.log(result)
          if (result && result.username !== null){
            message.success(`Welcome, ${result.username}`)
            window.localStorage.setItem('username', result.username)
            this.props.handleLogInSuccess()
          }
        } catch (error) {
          message.error(`fail to login due to ${error.message}`)
        }

        this.setState({
            loading: false
        })
    }

    handleClickGuestMode = () => {
      this.setState({
        loading : true
      })
      this.props.handleGuestMode()
      this.setState({
        loading : false
      })
    }

    render() {
        return (
            <div style={{ width: 500, margin: "20px auto" }}>
              <Form ref={this.formRef} onFinish={this.onFinish}>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    disabled={this.state.loading}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    disabled={this.state.loading}
                    placeholder="Password"
                  />
                </Form.Item>
              </Form>
              <Space>
                <Button
                  onClick={this.handleLogin}
                  disabled={this.state.loading}
                  style={{backgroundColor: "#33CCFF", border: "#33CCFF"}}
                  shape="round"
                  type="primary"
                >
                  Log in
                </Button>
                <Button
                  onClick={this.handleRegister}
                  disabled={this.state.loading}
                  shape="round"
                  type="primary"
                  style={{backgroundColor: "#33CCFF", border: "#33CCFF"}}
                >
                  Register
                </Button>
              </Space>
            </div>
          );
    }
}

export default LoginPage;