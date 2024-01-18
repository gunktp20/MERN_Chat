interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
}

interface ISetupUser {
  endPoint: "login" | "register";
  userInfo: {
    email: string;
    password: string;
  };
}
