const { isMainThread, Worker, workerData } = require("worker_threads");

if (isMainThread) {
  new Worker(__filename, {
    workerData: [1, 8, 9, 8, 2, 4, 7],
  });
  new Worker(__filename, {
    workerData: [1, 0, 9, 5, 2, 4, 7],
  });
} else {
  console.log(`${workerData.sort()}`);
}
