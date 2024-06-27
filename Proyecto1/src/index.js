import app from "./app.js";
import "dotenv/config";

async function main(){
const port = process.env.PORT;
app.listen(port);
console.log(`Se Levando Srv: ${port}`)
}
main();