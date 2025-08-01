import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="+  123456789">+ 123456789</Typography.Link>
      <Typography.Link href= "https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
      <Typography.Link href= "https://www.google.com" target={"_blank"}> Terms of Service</Typography.Link>
    </div>
  );
};

export default AppFooter;
