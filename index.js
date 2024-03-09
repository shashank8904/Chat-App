// const http = require("http");
// const express = require("express");
// const path = require('path');
// const { Server } = require("socket.io");

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server);

// // Socket.io
// io.on("connection", (socket) => {
//     socket.on("user-message", (message) =>{
//         io.emit("message",  message);
//     });
// });

// app.use(express.static(path.resolve("./public")));

// app.get("/", (req, res) => {
//     return res.sendFile("/public/index.html");
// });

// const port = process.env.PORT || 9000;


// server.listen(port, () => console.log(`Server Started at PORT: ${port}`));


const http = require("http");
const express = require("express");
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        io.emit("message", message);
    });
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route for serving index.html directly
app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 9000;

server.listen(port, () => console.log(`Server Started at PORT: ${port}`));


