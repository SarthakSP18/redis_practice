import client from "./client.ts";

async function init() {
    // await client.lpush("messages",1);
    // await client.lpush("messages",2);
    // await client.lpush("messages",3);
    // await client.lpush("messages",4);
    // const res = await client.lpop("messages"); // 2 popped 
    // const res = await client.blpop("messages",20);
    const res = await client.lrange("messages", 0, -1); // return all
    // const res = await client.lrange("messages", 1, 2); // return only index 1 and 2 element 

    console.log(res);
}
init();