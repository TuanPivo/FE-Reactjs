import React from 'react';

import 'antd/dist/reset.css';
import { Layout } from 'antd';
import ContainerHome from './ContainerHome';
import FooterHome from './FooterHome';
import HeaderHome from './HeaderHome';

export default function Home() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderHome />
            <ContainerHome />
            <FooterHome />
        </Layout>
    );
};
