declare interface Error {
  statusCode?: number;
  errors?: [];
}

interface IUser extends Document {
  username: String;
  email: String;
  password: String;
  createToken(): String;
  comparePassword(candidatePassword: String): Promise<boolean>;
}


