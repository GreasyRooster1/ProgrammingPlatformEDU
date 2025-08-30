function handle(func,thiss,...args){
    return ()=>{
        func.apply(thiss,args)
    }
}

const EMPTY_FUNC = ()=>{}

export {handle,EMPTY_FUNC}