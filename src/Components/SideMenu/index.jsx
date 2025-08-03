
import { Menu, Typography, Divider, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <div className="SideMenu-header">
        <Avatar
          size={48}
          src="https://images.pexels.com/photos/4744755/pexels-photo-4744755.jpeg"
          style={{ marginBottom: 12 }}
        />
        <Typography.Title level={4} style={{ margin: 0, color: "#1677ff" }}>
          My Dashboard
        </Typography.Title>
      </div>
      <Divider style={{ margin: "16px 0" }} />
      <Menu
        mode="inline"
        defaultSelectedKeys={["/"]}
        onClick={(items) => {
          navigate(items.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShopOutlined />,
            key: "/Inventory",
          },
      
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: "/Customers",
          },
        ]}
      />
      <div className="SideMenu-footer">
        <Divider />
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          © 2025 My Company
        </Typography.Text>
      </div>
    </div>
  );
};

export default SideMenu;