import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { BadRequestError, NotFoundError } from "../errors";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new BadRequestError("Please provide all value !");
  const user = await User.find({ email: email });
  if (!user) throw new NotFoundError("Not found your account");
  //@ts-ignore
  const passwordIsMatch = await user.comparePassword(password);
  if (!passwordIsMatch) {
    throw new BadRequestError("Password is incorrect");
  }
  //@ts-ignore
  const token = await user.createToken();
  res.status(StatusCodes.OK).json({ ...user, password: undefined, token });
};

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new BadRequestError("Please provide all value");

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) throw new BadRequestError("Your Email already in use");

  const user = await User.create(req.body);
  const token = user?.createToken();
  res.status(StatusCodes.OK).json({ user, token });
};

export { login, register };
