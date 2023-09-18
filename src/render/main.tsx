import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import App from "./App";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        colorPrimary: "#5662FF",
        borderRadius: 4,
      },
      components: {
        Button: {
          colorLink: "#5662FF",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>
);
