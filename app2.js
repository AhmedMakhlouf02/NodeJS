const os = require('os')

//const user = os.userInfo()
//console.log(user)
//console.log(os.uptime())
/* const currentOS = {
    name: os.type(),
    release: os.release(),
    memory : os.totalmem(),
    freeSp: os.freemem(),

}
console.log(currentOS) */
//#####################################################################################
const path = require('path')
//console.log(path.sep)
/* const filePath = path.join('/content', 'myFolder','test.txt')
console.log(filePath)
console.log(path.basename(filePath))
const absolute = path.resolve(__dirname , 'content','myFolder','test.txt')
console.log(absolute) */
//#####################################################################################
const fs = require('fs')

/* const makhlouf = fs.readFileSync('./content/makhlouf.txt','utf-8')
const test = fs.readFileSync('./content/myFolder/test.txt','utf-8')

//console.log(makhlouf, test)
fs.writeFileSync('./content/result.txt',`Ahmed Makhlouf: ${makhlouf} , test: ${test}`,{flag: 'a'})

const result = fs.readFileSync('./content/result.txt','utf-8') 
console.log(result)
 */
//######################################################################################

fs.readFile('./content/makhlouf.txt','utf-8',(err,data)=>{
    var myResult, myResult2
    if(err){
        console.log(err)
    }else{
        myResult = data
        console.log(data) 
        fs.readFile('./content/myFolder/test.txt','utf-8',(err2,data2)=>{
            if(err2){
                console.log(err2)
            }else{
                myResult2 = data2
                console.log(myResult2)
                fs.writeFile('./content/result-async.txt',`1: ${myResult} , 2: ${myResult2}`,{flag:'a'},(wErr,wResult)=>{
                    if(wErr){
                        console.log(wErr)
                    }else{
                        console.log('Done')
                    }
                })
            }
        })  
    }
})

