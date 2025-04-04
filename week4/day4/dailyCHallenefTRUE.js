function allTrue(...args) {
    return args.every(arg=>Boolean(arg)===true)
    
}
console.log(allTrue(true,true,false));
