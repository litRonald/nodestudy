// import express from "express";
// import compression from "compression";

// const staticFilePath = ""; // 静态资源路径，先空着，一会在“其他工作”中再填充

// const main = async () => {
//     const app = express();
//     const port = 8081;
  
//     app.use(compression()); // 使用compression中间件gzip静态资源文件
//     app.use("/static", express.static(config.staticFilePath)); // 静态资源文件在服务器中的位置
  
//     // 监听端口，起服务
//     app.listen(port, () => {
//       console.log(`server started at http://localhost:${port}`);
//     });
//   };
  
//   main();

import express from "express";
import compression from "compression";
import { getRouter } from "./router";

const staticFilePath = ""; // 静态资源路径，先空着，一会在“其他工作”中再填充

const main = async () => {
  const app = express();
  const port = 8081;

  app.use(compression()); // 使用compression中间件gzip静态资源文件
  app.use("/static", express.static(config.staticFilePath)); // 静态资源文件在服务器中的位置
  app.use("/api", getRouter()); // 挂载路由

  // 监听端口，起服务
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};

main();
