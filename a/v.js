async function  getProdcuts() {
    let url="http://localhost:3000/mobiles";
    let options={
        "method":"GET",
        "headers":{
            "Content-Type":"application/json"
        }
    }
    let data=await fetch(url,options);
    if(data.ok){
        let res=await data.json();
        console.log(res);
    }else{
        console.log("error found");
        
    }
}
getProdcuts()

async function  postProdcuts() {
    let url="http://localhost:3000/mobiles";
    let options={
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "name":"vivo"
        })
    }
    let data=await fetch(url,options);
    if(data.ok){
        let res=await data.json();
        console.log(res);
    }else{
        console.log("error found");
        
    }
}
postProdcuts()


async function  deleteProdcut(id) {
    let url=`http://localhost:3000/mobiles/${id}`;
    let options={
        "method":"DELETE",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "name":"vivo"
        })
    }
    let data=await fetch(url,options);
    if(data.ok){
        let res=await data.json();
        console.log(res);
    }else{
        console.log("error found");
        
    }
}
deleteProdcut(2)



async function  updateProdcuts(id) {
    let url=`http://localhost:3000/mobiles/${id}`;
    let options={
        "method":"PATCH",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "name":"pocoo4567890"
        })
    }
   
    let data=await fetch(url,options);
    if(data.ok){
        let res=await data.json();
        console.log(res);
    }else{
        console.log("error found");
    }
}
updateProdcuts(1)