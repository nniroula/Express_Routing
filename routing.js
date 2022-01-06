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

/*  MODE  */

/* Build a frequency counter object from an array
* @param {Array} arr any array
*/
function createFrequencyCounter(arr) {
 return arr.reduce(function(acc, next) {
   acc[next] = (acc[next] || 0) + 1;
   return acc;
 }, {});
}

/**
* Find the most common element in the array
* @param {Array} arr any array
*/
function findMode(arr) {
 let freqCounter = createFrequencyCounter(arr);

 let count = 0;
 let mostFrequent;

 for (let key in freqCounter) {
   if (freqCounter[key] > count) {
     mostFrequent = key;
     count = freqCounter[key];
   }
 }

 return +mostFrequent;
}

app.get("/mode", (req, res) => {
    // in browser http://localhost:3000/mean?nums=1,2,3,4,6,8
    let {nums} = req.query;  // this in browsser is http://localhost:3000/mean?nums=1,2,3. It return 1,2,3
    let result = {
        operation: "mode",
        result: findMode(nums)
      }
      return res.send(result);
})

// start a server 
app.listen(3000, function(){
    console.log("App running at port 3000");
})