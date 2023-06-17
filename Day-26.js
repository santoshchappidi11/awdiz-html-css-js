// Async await------------------------------------->

setTimeout(() => console.log("Run after 5 seconds.."), 5000);
setInterval(() => console.log("Run every 2 seconds"), 2000);

// Promises---------------------------------------->

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("response");
    }, 10000);
  });
}

async function asyncCall() {
  console.log("Start");
  const result = await resolveAfter2Seconds();
  console.log(result, "= result");
  console.log("end");
}

asyncCall();
