import http from "http";
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('filename: ',__filename, 'dirname:', __dirname)

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end("<h1>Home</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end("<h1>About</h1>");
      } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>Not found</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain " });
    res.end("<h1>Server Error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
