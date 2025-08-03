
import {Table, Typography, Card, Tag } from "antd";
import { useEffect, useState } from "react";
import { GetOrders } from "../../../Api/api";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    GetOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      ellipsis: true,
      render: (text) => <span style={{ fontWeight: 600 }}>{text}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => (
        <span style={{ color: "#52c41a", fontWeight: 600 }}>${value}</span>
      ),
    },
    {
      title: "Discounted Price",
      dataIndex: "discountedPrice",
      render: (value) => (
        <span style={{ color: "#faad14", fontWeight: 600 }}>${value}</span>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (value) => (
        <Tag color={value > 1 ? "blue" : "volcano"}>{value}</Tag>
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      render: (value) => (
        <span style={{ color: "#1677ff", fontWeight: 700 }}>${value}</span>
      ),
    },
  ];

  return (
    <div className="orders-table-card">
      <Typography.Title level={3} style={{ marginBottom: 24 }}>
        Orders
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
export default Orders;