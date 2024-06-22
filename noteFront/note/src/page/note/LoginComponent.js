// src/components/LoginComponent.js
import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space, message } from 'antd';
import { loginUser } from '../../api/LoginApi';

const LoginComponent = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
 

    const handleLogin = async () => {
      try {
          const user = { userId, password };
          const response = await loginUser(user);
          message.success('로그인을 성공하였습니다');
          localStorage.setItem('token', response.token); // JWT 저장
          console.log(response);
      } catch (error) {
          if (error.response && error.response.status === 401) {
              message.error('아이디나 비밀번호를 확인해주세요');
          } else {
              message.error('An error occurred. Please try again later.');
          }
          console.error('Error logging in:', error);
      }
  };
    return (
        <Space direction="vertical">
            <Input
                placeholder="ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <Input.Password
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
           
            <Button type="primary" onClick={handleLogin}>
                Login
            </Button>
        </Space>
    );
};

export default LoginComponent;
