import { createServer } from "http";
import secrets from "./config/secrets";

const port = 9800;
const server = createServer((req, res) => {
  res.write('hello world')
  res.end();
})

console.log('')
console.log(`${secrets.PRODUCT_NAME}: 🚀 Api is running on: http://localhost:${port}`);


server.listen(port);

