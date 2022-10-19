const url = require('url')

const adrs='https://www.google.com/search?q=youtube&oq=you&aqs=chrome.0.0i131i355i433i512j46i131i199i433i465i512j46i131i433i512j0i131i433i512l3j0i433i512l3j0i271.1927j0j15&sourceid=chrome&ie=UTF-8'
const q = url.parse(adrs,true)
console.log(q.host)
