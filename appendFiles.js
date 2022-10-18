const fs=require('fs');
const {promisify} = require('util');
const append = promisify(fs.appendFile);
const user="K-Nagesh";

(async () => {
        try{
                const modify = await append('createNew',`\n mygit credentials are stored ${user}`)
                console.log('successfully stored');
        } catch (err) {
                console.log('error');
        }
})()