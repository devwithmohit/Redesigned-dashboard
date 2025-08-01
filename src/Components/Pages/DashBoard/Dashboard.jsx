import React, { useEffect, useState } from "react";
import { Typography, Space, Card, Statistic, Table } from "antd";
import GetOrders from "../../../Api/api";
import {
  ShoppingCartOutlined,
  ShopOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
// chartjs and bar import
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
// chartjs Register
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  function DashBoardCard({ title, value, icon }) {
    return (
      <Space size={20} direction="vertical">
        <Card>
          <Space direction="horizontal">
            {icon}
            <Statistic title={title} value={value} />
          </Space>
        </Card>
      </Space>
    );
  }
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Chart.js Bar Chart" },
    },
  };
  const chartData = {
    labels: ["Orders", "Inventory", "Customers", "Revenue"],
    datasets: [
      {
        label: "stats",
        data: [231, 231, 231, 231],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(53, 162, 235, 0.5)",
          "rgba(0,255,255,0.5)",
          "rgba(255,0,0,0.5)",
        ],
      },
    ],
  };
  function Data() {
    const [dataSource, setdataSource] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
      setloading(true);

      GetOrders()
        .then((res) => setdataSource(res.products), setloading(false))
        .catch((err) => console.log(err));
    }, []);
    return (
      <>
        <Typography.Text>Recent Orders</Typography.Text>
        <Table
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Price",
              dataIndex: "price",
            },
          ]}
          loading={loading}
          dataSource={dataSource}
        ></Table>
      </>
    );
  }
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashBoardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"orders"}
          value={231}
        />
        <DashBoardCard
          icon={
            <ShopOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={231}
        />
        <DashBoardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customers"}
          value={231}
        />
        <DashBoardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={231}
        />
      </Space>
      <div style={{ width: "100%", marginTop: 24 }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div style={{ width: "100%", marginTop: 24 }}>
        <Data />
      </div>
    </div>
  );
};

export default Dashboard;
