'use client';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { Button, Layout, Menu, Content } from "antd";
import Link from 'next/link';
import { useRef } from 'react';


import { useState } from "react";



export default function Movements({children}) {
    const { Header, Footer, Sider, Content } = Layout;
    const windowWidth = useRef(window.innerWidth);
    const menuItems =[
        {
            label: <Link href='/movements'>Movimientos</Link>,
            key: 'mail',
            // icon: <MailOutlined />,
          },
          {
            label: <Link href='/movements/capital'>Gestionar capital</Link>,
            key: 'app',
            // icon: <AppstoreOutlined />,
            // disabled: true,
          },
    ]

    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    return (
        <>
            <Layout>
{console.log(windowWidth)}

        {windowWidth.current <= 640 && (<>
            <Button
          
          onClick={toggleCollapsed}
          className={  "bg-sky-600 w-full h-16 md:w-20"}
          style={{
          // marginBottom: 16,
          fontSize: "30px"
          }}
      >
          {collapsed ? < MenuUnfoldOutlined className={"text-black"}/> : <MenuFoldOutlined />}
      </Button>
      <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={menuItems}
          className={`mt-16 z-40 md:w-64 rounded-md ${!collapsed ? "absolute" : "hidden" }`}
      />
        </>) }

        {windowWidth.current > 640 && (<>
 
      <Menu
          mode="horizontal"
        //   theme="dark"
        //   inlineCollapsed={collapsed}
          items={menuItems}
        className={`mb-6 z-40 w-full rounded-md flex justify-center `}
      />
        </>) }

            <Content className='z-0 p-14'  >{children}</Content>

                         
            </Layout>
        </>
    );
  }