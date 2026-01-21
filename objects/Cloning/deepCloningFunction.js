let obj = {
  a: "name",
  b: 10,
  c: {
    d: 0,
    e: 5,
    f: {
      o: "ob",
    },
  },
};

function deepCloningFunction(obj){
    let clone = {}
    let keys = Object.keys(obj)
    keys.forEach((key)=>{
        if(typeof obj[key] === 'object' && obj[key] !== null){
            clone[key] = deepCloningFunction(obj[key])
        }else{
            clone[key] = obj[key]
        }
    })
return clone
}

console.log(deepCloningFunction(obj))