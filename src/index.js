import App from "./App"

const { createRoot } = require("react-dom/client")

let root=document.getElementById("root")
let dom=createRoot(root)
dom.render(<App/>)