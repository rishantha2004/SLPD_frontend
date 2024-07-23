import { Menu, Layout} from 'antd';
import '../../css/admin.css';
import Content from './elements/Content';
import {  HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Header} = Layout
const Admin = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          background: '#0e5e69',
          height: 100
        }}
      >
        <div className='header-text  '>SLPD</div>
      </Header>
      <div className='container1'>
      <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          { label: 'Dashboard', key: "/admin/dashboard", icon: <HomeOutlined />},
          { label: 'Users', key: "/admin/users", icon: <UserOutlined /> },
          { label: 'Profile', key: "/admin/profile" },
          { label: 'Data', key: "/admin/data" },
        ]}
      />
      <Content />
      
    </div>
    </Layout>
  );
};

export default Admin;
