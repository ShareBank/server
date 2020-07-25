import express from "express";
import cors from "cors";
import session from "express-session";
import routes from "./routes";
import { notFound } from "./handlers/errorHandler";

import passport from "passport";
import * as passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET as string,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

import User from "./models/User";
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(routes);
app.use(notFound);

app.use(express.static(__dirname + "/public"));

export default app;
