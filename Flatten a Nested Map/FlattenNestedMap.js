function FlattenObject(oldObject){
    let newObject = {};

    flattenHelper(oldObject, newObject, '');

    return newObject;
}

function flattenHelper(currentObj, newObj, previousKeyName){
    for (let key in currentObj){
        let value = currentObj[key];

        if(value.constructor !== Object){
            newObj[previousKeyName+'/'+key] = value;

        } else if (previousKeyName == null || previousKeyName == ''){
            flattenHelper(value, newObj, key);
        } else flattenHelper(value, newObj, previousKeyName + '/' + key);
    }
}


var input = {
    'a': {
      'b': {
        'c': 12,
        'd': 'Hello World'
      },
      'e': [1,2,3]
    }
  };

console.log(FlattenObject(input));