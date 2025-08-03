import React, { useEffect, useState } from "react";
import { Typography, Table, Avatar, Tag, Card } from "antd";
import { getProducts } from "../../../Api/api";

const Inventory = () => {
  const [dataSource, setdataSource] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getProducts().then((res) => {
      setdataSource(res.products);
      setloading(false);
    });
  }, []);

  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (link) => <Avatar shape="square" size={48} src={link} />,
      width: 80,
    },
    {
      title: "Title",
      dataIndex: "title",
      ellipsis: true,
      width: 180,
      render: (text) => <span style={{ fontWeight: 600 }}>{text}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => (
        <span style={{ color: "#52c41a", fontWeight: 600 }}>${value}</span>
      ),
      width: 100,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      render: (value) => (
        <Tag color={value > 4 ? "green" : value > 3 ? "orange" : "red"}>
          {value}
        </Tag>
      ),
      width: 90,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      ellipsis: true,
      width: 120,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      render: (value) => (
        <Tag color={value > 20 ? "blue" : "volcano"}>{value}</Tag>
      ),
      width: 90,
    },
    {
      title: "Category",
      dataIndex: "category",
      ellipsis: true,
      width: 120,
    },
  ];

  return (
    <div className="inventory-table-card">
      <Typography.Title level={3} style={{ marginBottom: 24 }}>
        Inventory
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
          columns={columns}
          loading={loading}
          dataSource={dataSource}
          rowKey="id"
          pagination={{ pageSize: 8 }}
          style={{ borderRadius: 16, overflow: "hidden" }}
        />
      </Card>
    </div>
  );
};

export default Inventory;