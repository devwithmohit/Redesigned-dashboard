import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
const SideMenu = () => {
  const navigate = useNavigate()

  return (
    <div className="SideMenu">
      <Menu
        onClick={(items) => {
        navigate(items.key)
        }}
        items={[
          {
            label: "DashBoard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShopOutlined />,
            key: "/Inventory",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/Orders",
          },
          {
            label: "Customer",
            icon: <UserOutlined />,
            key: "/Customers",
          },
        ]}
      />
    </div>
  );
};

export default SideMenu;
