// import { Avatar, Rate, Space, Table, Typography } from "antd";
// import { useEffect, useState } from "react";
// import { getCustomers } from "../../../Api/api";

// function Customers() {
//   const [loading, setLoading] = useState(false);
//   const [dataSource, setDataSource] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     getCustomers().then((res) => {
//       setDataSource(res.users);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <Space size={20} direction="vertical">
//       <Typography.Title level={4}>Customers</Typography.Title>
//       <Table
//         loading={loading}
//         columns={[
//           {
//             title: "Photo",
//             dataIndex: "image",
//             render: (link) => {
//               return <Avatar src={link} />;
//             },
//           },
//           {
//             title: "First Name",
//             dataIndex: "firstName",
//           },
//           {
//             title: "LastName",
//             dataIndex: "lastName",
//           },
//           {
//             title: "Email",
//             dataIndex: "email",
//           },
//           {
//             title: "Phone",
//             dataIndex: "phone",
//           },

//           {
//             title: "address",
//             dataIndex: "address",
//             render: (address) => {
//               return (
//                 <span>
//                   {address.address}, {address.city}
//                 </span>
//               );
//             },
//           },
//         ]}
//         dataSource={dataSource}
//         pagination={{
//           pageSize: 5,
//         }}
//       ></Table>
//     </Space>
//   );
// }
// export default Customers;

import { Avatar, Space, Table, Typography, Card, Tag } from "antd";
import { useEffect, useState } from "react";
import { getCustomers } from "../../../Api/api";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      title: "Photo",
      dataIndex: "image",
      render: (link) => <Avatar src={link} size={48} />,
      width: 80,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      render: (text) => <span style={{ fontWeight: 600 }}>{text}</span>,
      width: 120,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      render: (text) => <span style={{ fontWeight: 600 }}>{text}</span>,
      width: 120,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text) => (
        <span style={{ color: "#1677ff", fontWeight: 500 }}>{text}</span>
      ),
      ellipsis: true,
      width: 200,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (text) => (
        <span style={{ color: "#52c41a", fontWeight: 500 }}>{text}</span>
      ),
      width: 140,
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (address) => (
        <span>
          {address.address}, {address.city}
        </span>
      ),
      ellipsis: true,
      width: 220,
    },
  ];

  return (
    <div className="customers-table-card">
      <Typography.Title level={3} style={{ marginBottom: 24 }}>
        Customers
      </Typography.Title>
      <Card
        style={{
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(22,119,255,0.07)",
          background: "#fff",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          pagination={{ pageSize: 8 }}
          style={{ borderRadius: 16, overflow: "hidden" }}
        />
      </Card>
    </div>
  );
}
export default Customers;
