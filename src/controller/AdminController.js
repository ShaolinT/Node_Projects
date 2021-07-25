const express = require("express");
const app = express();
const path = require("path");
require("./backend/public/js/db_connection");
const hbs = require("hbs");
const User = require("./backend/public/js/model_schema");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_Secret = "asdasddui8d88d76d7d6d54&^%&*^(*&)(&*(^$!!";

const port = 3000;