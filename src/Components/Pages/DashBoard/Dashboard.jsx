import React, { useEffect, useState } from "react";
import { Typography, Space, Card, Statistic, Table } from "antd";
import { GetOrders, getRevenue } from "../../../Api/api";
import {
  ShoppingCartOutlined,
  ShopOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
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

  function DashBoardChart() {
    const [reveneuData, setRevenueData] = useState({
      labels: [],
      datasets: [],
    });

    useEffect(() => {
      getRevenue().then((res) => {
        const labels = res.carts.map((cart) => `User-Id${cart.userId}`);
        const data = res.carts.map((cart) => cart.discountedTotal);
        setRevenueData({
          labels,
          datasets: [
            {
              label: "Dataset_1",
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(53, 162, 235, 0.5)",
                "rgba(0,255,255,0.5)",
                "rgba(255,0,0,0.5)",
              ],
            },
          ],
        });
      });
    }, []);

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: true, text: "Chart.js Bar Chart" },
      },
    };

    return (
      <Bar options={chartOptions} data={reveneuData} />
    );
  }

  function Data() {
    const [dataSource, setdataSource] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
      setloading(true);

      GetOrders()
        .then((res) => {
          setdataSource(res.products);
          setloading(false);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
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
  <div className="DashboardPage">
    <Typography.Title level={3} className="dashboard-title">
      Dashboard Overview
    </Typography.Title>
    <div className="dashboard-cards-row">
      <DashBoardCard
        icon={
          <ShoppingCartOutlined
            style={{
              color: "#fff",
              backgroundColor: "#52c41a",
              borderRadius: "50%",
              fontSize: 40,
              padding: 16,
              boxShadow: "0 2px 8px rgba(82,196,26,0.15)",
            }}
          />
        }
        title={"Orders"}
        value={231}
      />
      <DashBoardCard
        icon={
          <ShopOutlined
            style={{
              color: "#fff",
              backgroundColor: "#1677ff",
              borderRadius: "50%",
              fontSize: 40,
              padding: 16,
              boxShadow: "0 2px 8px rgba(22,119,255,0.15)",
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
              color: "#fff",
              backgroundColor: "#722ed1",
              borderRadius: "50%",
              fontSize: 40,
              padding: 16,
              boxShadow: "0 2px 8px rgba(114,46,209,0.15)",
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
              color: "#fff",
              backgroundColor: "#faad14",
              borderRadius: "50%",
              fontSize: 40,
              padding: 16,
              boxShadow: "0 2px 8px rgba(250,173,20,0.15)",
            }}
          />
        }
        title={"Revenue"}
        value={231}
      />
    </div>
    <div className="dashboard-section">
      <div className="dashboard-chart-card">
        <DashBoardChart />
      </div>
      <div className="dashboard-table-card">
        <Data />
      </div>
    </div>
  </div>
);

};
export default Dashboard;