function handle(func,thiss,...args){
    return ()=>{
        func.apply(thiss,args)
    }
}

export {handle}