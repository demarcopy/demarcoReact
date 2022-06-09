const customFetch = (time, task) => {



    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(task());
        }, 2000);
    })   
}


export default customFetch



fetch("https://fakestoreapi.com/products")