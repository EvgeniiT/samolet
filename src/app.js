import React, { useEffect, useState } from 'react';
import Home from './pages/home';
import DetailPage from './pages/detailPage';
import { Layout, Menu } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import './app.css';
import { getData } from "./api";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <Layout style={{minHeight:"100vh"}}>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" selectedKeys="none">
          <Menu.Item key="1" style={{lineHeight: "64px"}}><Link to='/samolet'>Домой</Link></Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content className="mainContent">
        <Switch>
          <Route exact path='/samolet'>
            <Home data={data}/>
          </Route>
          <Route path='/subject/:id'>
            <DetailPage data={data}/>
          </Route>
        </Switch>
      </Layout.Content>
    </Layout>
  );
}
