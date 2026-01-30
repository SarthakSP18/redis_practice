import client from "./client.ts";

async function name() {
    // await client.sadd("ip",3);
    await client.srem("ip",3);
    const res = await client.sismember("ip",3);
    console.log(res);
    
}
name();