import "./App.css";

import { Space } from "antd";
import AppContent from "./Components/AppContent";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenuAndPageContent">
        <SideMenu>This is SideMenu</SideMenu>
        <AppContent>This is App content</AppContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
