import { Worker } from "worker_threads"
import axios from "axios"

const worker = new Worker("./worker.ts")

async function CallGoogle() {
	return axios.get("https://google.com")
}

worker.on("message", (message) => {
	console.log("This is from the worker.on")
	console.log("PP", message)
	const resp = CallGoogle()
	console.log("Response", resp.then(c => c).catch(e =>console.error(e.errors)))
})

worker.postMessage("THIS is from the postmessage")

console.log("What will happen")
