import { getUser, IUserStatus } from "../db";

// user相关的service
export class UserService {
  private userData = getUser();

  // 获取用户列表信息
  getUserData = () => {
    const output = this.userData.filter(
      (item) => item.status === IUserStatus.INUSE
    );
    return output ? output : [];
  };
}
