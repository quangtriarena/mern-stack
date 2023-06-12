const http = require("http");

const server = http.createServer((req, res) => {
  /**
   * khi server request, callback function sẽ được chạy
   */
  res.end("hello world!");
});

/**
 * Đây là tạo ra 1 webserver sử dụng port 3000
 */
server.listen(3000, (err, res) => {
  console.log("server listening on port " + 3000);
});
