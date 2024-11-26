// async function getDataMobiles() {
//     let url="http://localhost:3000/mobiles"

//     let data=await fetch(url);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);
//     }
// }
// getDataMobiles()

// async function getDataLaptops() {
//     let url="http://localhost:3000/laptops"

//     let data=await fetch(url);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);
//     }
// }
// getDataLaptops()



// async function  postDataMobiles() {
//     let url="http://localhost:3000/mobiles";
// let options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         id:3,
//          name:"vivo"
//      })
// }
//     let data=await fetch(url,options);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);   
//     }
// }
// postDataMobiles()



// async function  postDataLaptops() {
//     let url="http://localhost:3000/laptops";
// let options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         id:3,
//          name:"macbbok m3 chip"
//      })
// }
//     let data=await fetch(url,options);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);   
//     }
// }
// postDataLaptops()



async function  updateDataLaptops(id) {
    let url=`http://localhost:3000/laptops/${id}`;
let options={
    "method":"PATCH",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
         "name":"hp i9 core intel 13th GEN"
     })
}
    let data=await fetch(url,options);
    if(data.ok){
        let res=await data.json()
        console.log(res);   
    }
}
// updateDataLaptops(3)



// async function  deleteDataLaptops(id) {
//     let url=`http://localhost:3000/laptops/${id}`;
// let options={
//     "method":"DELETE",
// }
//     let data=await fetch(url,options);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);   
//     }else{
//         console.log(data);
        
//     }
// }
// deleteDataLaptops(1)