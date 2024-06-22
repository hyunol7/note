import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';
import NoteList from '../page/note/NoteList';
import AddPage from '../page/note/AddPage';
import NoteListComponent from './note/NoteListComponent';

import NoteDetailComponent from './note/NoteDetailComponent';
import NoteModifyComponent from './note/NoteModifyComponent';
import LoginPage from './note/LoginPage';

const { Content, Footer, Sider } = Layout;

const Main = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => navigate('/')}>
            Main
          </Menu.Item>
          <Menu.Item key="2" onClick={() => navigate('/note')}>
            Note
          </Menu.Item>
          <Menu.Item key="3" onClick={() => navigate('/note/write')}>
            Note Write
          </Menu.Item>
          <Menu.Item key="4" onClick={() => navigate('/user/login')}>
            Login
          </Menu.Item>
         
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '100vh',
              width: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<div>Main Content</div>} />
              <Route path="/note" element={<NoteList />} />
              <Route path="/note" element={<NoteListComponent />} />
              <Route path="/note/write" element={<AddPage />} />
              <Route path="/note/:nno" element={<NoteDetailComponent />} />
              <Route path="/note/modify/:nno" element={<NoteModifyComponent />} />
              <Route path="/user/login" element={<LoginPage />} />      
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
