import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import passport from "passport";
import { PassportLocalSchema } from "mongoose";

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "O nome é obrigatório"
  },
  email: {
    type: String,
    trim: true,
    required: "O email é obrigatório"
  },
  access_token: {
    type: String
  }
});
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

export default mongoose.model("User", userSchema as PassportLocalSchema);
