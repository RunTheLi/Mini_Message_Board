// routes/indexRouter.js
const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message Form" });
});

indexRouter.get("/messages/:id", (req, res) => {
  const messageId = Number(req.params.id);

  const message = messages[messageId];

  res.render("message", {
    message: message
  });
});


indexRouter.post("/new", (req, res) => {
  const { user, text } = req.body;

  messages.push({
    text: text,
    user: user,
    added: new Date()
  });

  res.redirect("/");
  
});

module.exports = indexRouter;