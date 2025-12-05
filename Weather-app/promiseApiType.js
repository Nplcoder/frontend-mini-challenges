// Promise API Type

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 Sucess'), 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P2 Sucess'), 1000);
    setTimeout(() => reject('P2 Fail'), 1000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P3 Sucess'), 2000);
    setTimeout(() => reject('P3 Fail'), 2000);
})

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res)
// })
// .catch((err) => {
//     console.error(err)
// })


// Promise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res)
// })
// .catch((err) => {
//     console.error(err)
// })


// Promise.race([p1, p2, p3]).then(res => {
//     console.log(res)
// })
// .catch((err) => {
//     console.error(err)
// })


Promise.any([p1, p2, p3]).then(res => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
    console.log(err.errors)
})

// Given timings:
// p1 = 3 sec, p2 = 1 sec, p3 = 2 sec

// 1. Promise.all(p1, p2, p3)

// Waits for all promises to fulfill.

// Returns result at 3 sec (slowest).

// If any promise throws an error, it immediately rejects and stops waiting for the rest.

// Example:
// If p2 errors at 1 sec → Promise.all rejects at 1 sec.

// 2. Promise.allSettled(p1, p2, p3)

// Waits for all promises to finish.

// Returns results at 3 sec.

// Results include {status: "fulfilled"} or {status: "rejected"} for each.

// Errors do not stop anything; they are reported in the results array.

// 3. Promise.race(p1, p2, p3)

// Returns the result of the first settled promise.

// Finishes at 1 sec (p2).

// If the first settled promise throws an error, it rejects.

// Example:
// If p2 errors at 1 sec → race rejects at 1 sec, ignoring p1 and p3.

// 4. Promise.any(p1, p2, p3)

// Returns the first fulfilled promise.

// Finishes at 1 sec if p2 fulfills.

// If a promise errors, it is skipped.

// Only rejects if all promises reject.

// Example:
// If p2 errors at 1 sec but p3 fulfills at 2 sec → result returns at 2 sec.
// If all three error → rejects with AggregateError.
