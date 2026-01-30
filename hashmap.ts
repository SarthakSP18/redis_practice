import client from "./client.ts";

async function name() {
    await client.hset("rcb:1",{"opener":"king","middleorder":"rajat","finisher":"shephard"})
    const res = await client.hget("rcb:1","opener");
    console.log(res);
    
}
name()