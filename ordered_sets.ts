import client from "./client.ts";

async function name() {
    await client.zadd("std",1,"topper");
    const res = await client.zrange("std",0,-1)
    console.log(res);
    
}
name()