require("dotenv").config();
const express = require("express");
const { engine } = require("express-handlebars");
const session = require("express-session");
const connectDB = require("./config/db");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const passport = require("passport");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Method override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      let method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

require("./config/passport")(passport);
connectDB;

const {
  formatDate,
  stripTags,
  truncate,
  editIcon,
  select,
} = require("./helpers/hbs");

app.engine(
  ".hbs",
  engine({
    helpers: { formatDate, stripTags, truncate, editIcon, select },
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use(express.static("./public"));
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

app.listen(process.env.PORT, console.log(`Server at: http://localhost:5000`));
