
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let addExcitement = (theWordArray, symb) => {
    let buildMeUp = ""
    for (let i = 1; i <= theWordArray.length; i++) {
        buildMeUp +=" " + theWordArray[i-1];
        if(i%3===0 && i!==0){
            for (j=0; j<i/3; j++){
                buildMeUp += symb;
            }
        }
        console.log(buildMeUp);
    }

}

addExcitement(sentence, "?")