// server.js
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static("public")); // Serve index.html from public folder

io.on("connection", (socket) => {
  console.log("🟢 A user connected");

  socket.on("chat message", (data) => {
    io.emit("chat message", data);
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected");
  });
});

server.listen(3000, () => {
  console.log("🚀 BondhuChat running at http://localhost:3000");
});
