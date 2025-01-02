const crypto = require("crypto");
const https = require("https");

//libuv threadpool size is 4 by default


// process.env.UV_THREADPOOL_SIZE = 6;

const start = Date.now();

console.log(process);


const MAX_CALLS = 16;

// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//     console.log(`Hash: ${i + 1}`, Date.now() - start);
// })
// };


