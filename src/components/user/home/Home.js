import React, { useState } from 'react';
import { Layout, Button, Row, Col, Input, Form} from 'antd';
import 'antd/dist/reset.css';
import axios from 'axios';
import { message } from 'antd';

export default function Home() {
    const [reason, setReason] = useState('');

    const handleCheckInOut = async (type) => {
        try {
            const token = localStorage.getItem('token');
            console.log(token)
            const header = { "Authorization": `Bearer ${token}` }
            const data = {
                note: reason // 'reason' là giá trị từ Input.TextArea
            };
            const {response} = await axios.post(`http://127.0.0.1:8000/api/attendance/${type}`,data, { headers: header});
            // Hiển thị thông báo thành công
            if (type === 'checkIn') {
                message.success('Check in success');
            } else if (type === 'checkOut') {
                message.success('Check out success');
            }
        } catch (error) {
            // Hiển thị thông báo lỗi nếu xảy ra lỗi
            message.error('Failed to check in/out. Please try again later.');
        }
    };

    const handleReasonChange = (e) => {
        setReason(e.target.value);
    };

    const handleSubmit = (isCheck) => {
        // Xác định type dựa trên giá trị của isCheck
        const type = isCheck ? 'checkIn' : 'checkOut';
        handleCheckInOut(type);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col span={8}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ marginBottom: '30px' }}>Time</h1>
                        <Form>
                            <Form.Item>
                                <Input.TextArea rows={4} placeholder="Note..." value={reason} name='note' onChange={handleReasonChange} />
                            </Form.Item>
                            <Form.Item>
                                {/* Sử dụng onClick để gọi hàm handleSubmit với type tương ứng */}
                                <Button type="primary" name='check_in' htmlType="submit" onClick={() => handleSubmit(true)} style={{ marginRight: '10px' }}>
                                    Check In
                                </Button>
                                <Button type="primary" name='check_out' htmlType="submit" onClick={() => handleSubmit(false)} style={{ marginRight: '10px' }}>
                                    Check Out
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};
