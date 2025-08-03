
import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined, DashboardOutlined } from "@ant-design/icons";

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <Space align="center">
        <DashboardOutlined style={{ fontSize: 38, color: "#1677ff", marginRight: 8 }} />
        <Typography.Title
          level={3}
          style={{
            margin: 0,
            color: "#1677ff",
            fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
            letterSpacing: "1px",
            fontWeight: 700,
          }}
        >
          InsightVista Dashboard
        </Typography.Title>
      </Space>
      <Space>
        <Badge dot>
          <MailOutlined
            style={{
              fontSize: 24,
              color: "#fff",
              background: "#1677ff",
              borderRadius: "50%",
              padding: 8,
            }}
          />
        </Badge>
        <Badge count={20}>
          <BellFilled
            style={{
              fontSize: 24,
              color: "#fff",
              background: "#faad14",
              borderRadius: "50%",
              padding: 8,
            }}
          />
        </Badge>
        <Image
          width={40}
          src="https://images.pexels.com/photos/4744755/pexels-photo-4744755.jpeg"
          alt="user"
          style={{ borderRadius: "50%", marginLeft: 8 }}
          preview={false}
        />
      </Space>
    </div>
  );
};

export default AppHeader;