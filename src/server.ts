import net from "net";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

// DB config
mongoose.connect(process.env.DATABASE as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => {
  console.error("Error: " + error.message);
});

// Load Models
require("./models/User");

import app from "./app";

app.set("port", process.env.PORT || 3333);
const server = app.listen(app.get("port"), () => {
  const { port } = server.address() as net.AddressInfo;
  console.log("Server running on port " + port);
});
