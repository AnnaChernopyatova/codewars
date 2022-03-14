function MovingZeros(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){  
            array.push(array.splice(i,1).pop()); }
      }

    return(array);
}

MovingZeros([false,1,0,1,2,0,1,3,"a"]);
