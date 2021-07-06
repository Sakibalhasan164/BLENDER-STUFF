function map(variable,fromDefault,toDefalut,fromOutput,toOutput){
//check if the value is grater or less thean from and to default;



    //the input value
    let theInputInNumber=toDefalut-fromDefault;
    //the output value
    let theOutputInNumber=toOutput-fromOutput;

    let theInputParcentage=variable/theInputInNumber;
    let output=theInputParcentage*theOutputInNumber;
    //return the final maped value
    return output
}
let color=22
let mappedValue=map(color,0,256,0,1)
console.log(mappedValue);