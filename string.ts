

import client from "./client.ts";

async function init() {
    // await client.expire("msg:5",5)
    // await client.set("msg:5","yeuu")
    const result = await client.get("msg:5");
    console.log(`Result - `+result);
}

init();


// import client from "./client.ts";

// async function init() {
//     const result = await client.incrby("count",10);
//     console.log(`Result - `+result);
// }

// init();