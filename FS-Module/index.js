const fs=require('fs')

// async function
fs.writeFile('./test.txt', 'my name is Raghvendra shukla \nI love codeing.',(err)=>{
    // console.log(err)
})

fs.readFile('./test.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})
