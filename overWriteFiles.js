const fs = require('fs');
const {promisify} = require('util');
const writeFiles = promisify(fs.writeFile);

(async ()=>{
    try{
        const fileCreating = await writeFiles('createNew', 'File is created');
        console.log('success');
    } catch (err){
        console.log('err');
    }
})()