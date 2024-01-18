import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
    unique: true,
    maxlength: 30,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    validate: [validator.isEmail],
    maxlength: 30,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: [6, "password must contain more than 6 letter "],
    select: false,
  },
});

userSchema.pre("save", async function () {
  console.log(this.modifiedPaths());
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createToken = function (): string {
  return jwt.sign(
    { userId: this._id, username: this.username },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "60m",
    }
  );
};

userSchema.methods.comparePassword = function (
  candidatePassword: string
): Promise<boolean> {
  let password = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, password, (err, success) => {
      if (err) return reject(err);
      return resolve(success);
    });
  });
};

export default mongoose.model<IUser>("users", userSchema);
