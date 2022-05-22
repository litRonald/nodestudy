import express from "express";
import { UserController } from "./controller/userController";

export const getRouter = () => {
  const userController = new UserController(); // 实例化controller
  const router = express.Router();
  router.get("/user", userController.getUser); // 配置路由执行的方法，当访问/user路径时，执行getUser方法
  return router;
};
