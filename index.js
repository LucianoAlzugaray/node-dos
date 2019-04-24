const fetch = require('node-fetch')

let connections = process.argv[2]
let page = process.argv[3]

for(let i = 0; i < connections; i++){
	fetch(page)
	.then(res => console.log(`${i+1}: ${res.status}`))
}
