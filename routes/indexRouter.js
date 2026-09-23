// routes/indexRouter.js
const { Router } = require("express");
const db = require("../db/queries");

const indexRouter = Router();


indexRouter.get("/", async (req, res) => {
  const messages = await db.getAllMessages();

  res.render("index", {
    title: "Mini Messageboard",
    messages: messages
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message Form" });
});

indexRouter.get("/messages/:id", async (req, res) => {
  const message = await db.getMessage(req.params.id);

  res.render("message", {
    message: message
  });
});


indexRouter.post("/new", async (req, res) => {
  const { user, text } = req.body;

  if (!user?.trim() || !text?.trim()) {
    return res.status(400).send("Username and message are required.");
  }

  if (user.trim().length > 255 || text.trim().length > 255) {
    return res.status(400).send("Username and message must be 255 characters or less.");
  }

  await db.insertMessage(user, text);

  res.redirect("/");
});

module.exports = indexRouter;