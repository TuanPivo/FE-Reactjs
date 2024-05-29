import React from 'react'
import { Button, Row, Col, Form, } from 'antd';
import { ClockCircleTwoTone } from '@ant-design/icons';
import ClockTime from './ClockTime';
import { Content } from 'antd/es/layout/layout';
import { message } from 'antd';
import axios from 'axios';

export default function Container() {
    const handleCheckInOut = async (type) => {
        try {
            const token = localStorage.getItem('token');
            if(!token){
                
            }
            const header = { "Authorization": `Bearer ${token}` }
            const data = {};
            const respone = await axios.post(`http://127.0.0.1:8000/api/attendance/${type}`, data, { headers: header });
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

    const handleSubmit = (isCheck) => {
        // Xác định type dựa trên giá trị của isCheck
        const type = isCheck ? 'checkIn' : 'checkOut';
        handleCheckInOut(type);
    };
  return (
      <Content>
          <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
              <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                      <h1 style={{ marginBottom: '30px' }}>Time</h1>
                      <div style={{ marginBottom: '20px', fontSize: '24px' }}>
                          <ClockCircleTwoTone style={{ marginRight: '10px' }} />
                          <ClockTime />
                      </div>
                      <Form>
                          {/* <Form.Item>
                                <Input.TextArea rows={4} placeholder="Note..." value={reason} name='note' onChange={handleReasonChange} />
                            </Form.Item> */}
                          <Form.Item>
                              {/* Sử dụng onClick để gọi hàm handleSubmit với type tương ứng */}
                              <Button type="primary" htmlType="submit" onClick={() => handleSubmit(true)} style={{ marginRight: '10px' }}>
                                  Check In
                              </Button>
                              <Button type="primary" htmlType="submit" onClick={() => handleSubmit(false)} style={{ marginRight: '10px' }}>
                                  Check Out
                              </Button>
                          </Form.Item>
                      </Form>
                  </div>
              </Col>
          </Row>
      </Content>
  )
}
