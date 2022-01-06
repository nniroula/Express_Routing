const express = require('express');

const app = express();
// for converting to json
app.use(express.json());

/* Routes for mean median and mode */
// app.get("/mean/:nums", (req, res) => {
app.get("/mean", (req, res) => {
   
    let {nums} = req.query;  // this in browsser is http://localhost:3000/mean?nums=1,2,3. It return 1,2,3

    // nums in the form of string, get each value and push it to an array. use that array to calculate mean
    let arr = [];
    for(let num of nums){
        if(num !== ','){
            // console.log(num);
            parsedToInteger = parseInt(num);
            arr.push(parsedToInteger);
        }
    }
    // console.log(arr);
    // then calculate mean
    let mean = 0;
    let sum = 0;
    for(let value of arr){
        sum = sum + value;
    }
    mean = sum/(arr.length);
    console.log(mean);

    // response should be json 
    let resp = {
        operation: 'mean',
        value: mean
    }
    
    // let val = res.json(resp);  // works fine
    let val = res.json(`response: ${resp}`);
    // console.log("respoonse:" + val);
    // return res.send(`${mean}`); // works fine
    return res.send(val);

})



// start a server 
app.listen(3000, function(){
    console.log("App running at port 3000");
})