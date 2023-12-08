const countValue= document.querySelector('#counter');

const increment = () => {

    //get the value from ui
    let value= parseInt(countValue.innerText);

    //update the value
    value=value+1;

    //set the value ontto UI

    countValue.innerText= value;
}

const decrement= () => { 
 //get the value from ui
 let value= parseInt(countValue.innerText);

 //update the value
 value=value-1;

 //set the value ontto UI

 countValue.innerHTML= value;
}
