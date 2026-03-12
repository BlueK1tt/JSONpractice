const { error } = require('console');
const fs = require('fs')

let rawdata1 = fs.readFileSync('./test.json')
fs.close;

filename = "this is filename"

nestname = "thisisnestname"
nestcategory = "thisisnextcategory"
nestdata1 = "thisisnestdata1"
nestdata2 = "thisisnestdata2"

nestdata3 = "thisisnestdata3"
nestdata4 = "thisisnestdata4"

testname1 = "depotname1"
testname2 = "depotname2"


var someObj = {};
var foo = 'bar';
someObj[foo] = 2;
console.log(someObj)


if(rawdata1 == ""){
    console.log("file empty")
    firstentry()
    return;
}   
if(rawdata1 != ""){
    console.log("file not empty")
    let json1 = JSON.parse(rawdata1);
    appendjson();
    return;

} else {
    console.log("error")
    return;
}
function firstentry(){ 
    console.log("firstentry")

    //firstdata = JSON.stringify(nested(nestname, nestcategory, nestdata1, nestdata2))
    //const nestetdata = [[nestname],[nestcategory]]
    //const nestedcategory = [[nestcategory],JSON.stringify(nestetdata)]
    //const nestedname = [nestname,JSON.stringify(nestedcategory)]
    
    var testname1 = {data1:nestdata1,data2:nestdata2}
    var testname2 = {data3:nestdata3, data4:nestdata4}

    var moredata = [testname1,testname2]

    var dataobject = {data1:nestdata1, data2:nestdata2, moredata}

    var categorydata = {category:nestcategory, dataobject}

    var firstentry = {};
    var filenames = filename
    firstentry[filenames] = [categorydata]

    var nestedvategory = JSON.stringify(firstentry,null,2)


    console.log(nestedvategory)    
    fs.writeFile('./test.json', nestedvategory, 'utf-8', function(error){
            if(error){
                console.log(error)
        }
    });
    fs.close
}

function appendjson(){
    console.log("appendjson")
    fs.readFile('./test.json','utf-8',(err, data)=>{ 
        if(err) {
            console.error(err)
            return;
        } else{
            console.log(data)
            return;
        }
    })
}