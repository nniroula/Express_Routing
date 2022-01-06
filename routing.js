const express = require('express');

const app = express();
// for converting to json
app.use(express.json());

/* Route for mean */
app.get("/mean", (req, res) => {
    // in browser http://localhost:3000/mean?nums=1,2,3,4,6,8
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
    
    let val = res.json(resp);  // works fine
    return res.send(val);
})

/* Route for median */

app.get("/median", (req, res) => {
    // in browser http://localhost:3000/mean?nums=1,2,3,4,6,8
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
    let median = (arr[0] + arr[(arr.length)-1])/2

    // response should be json 
    let resp = {
        operation: 'median',
        value: median
    }
    
    let val = res.json(resp);  
    return res.send(val);
})



// start a server 
app.listen(3000, function(){
    console.log("App running at port 3000");
})

