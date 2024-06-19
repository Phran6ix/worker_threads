const {parentPort } = require("worker_threads")

parentPort.once("message", (message)=> {
	console.log("message")
	console.log(message)
	parentPort?.postMessage("Go back to parent")
})
