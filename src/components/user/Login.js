import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import axios from 'axios';


export default function Login() {

    const handleLogin = async (values) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', values);
            const token = response.data.access_token;
            console.log(token);
            if (token) {
                localStorage.setItem('token', token);
                message.success('Login successful!');
            }
        } catch (error) {
            message.error('Login failed! Please check your email or password.');
        }
    };
   
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Form
                name="login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={handleLogin}
                style={{ width: 300 }}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" type='email' />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="" style={{ float: 'right' }}>
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
