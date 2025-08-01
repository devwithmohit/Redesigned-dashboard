import React from "react";
import { Badge, Image, Space, Typography} from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
const AppHeader = () => {
  return (

    <div className="AppHeader">
    <Image width={40} src="https://images.pexels.com/photos/4744755/pexels-photo-4744755.jpeg" alt="ubuntu"></Image>
    <Typography.Title>Mohit's Dashboard</Typography.Title>
    <Space>
      <Badge dot>

      <MailOutlined style={{fontSize:24}}/>
      </Badge>
      <Badge count={20}>
      <BellFilled/>
      </Badge>
        
    </Space>
    </div>

  )
  
}

export default AppHeader;
