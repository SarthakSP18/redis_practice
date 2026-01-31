import client from "./client.ts";

async function name() {
    await client.xadd("temp", "*", "t", "30");
    console.log("added success");

}
name()