
 let container=document.getElementById("container_item");
 
 fetching()
  function fetching(){
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    .then((res)=>res.json())
    .then((data)=>showresult(data.data))
 
}
 function showresult(data){
     data.map((ele)=>{
          console.log(ele.image)
       container.innerHTML+=`
       <div id="card"> 
       <div id="brand">${ele.brand}</div>
       <div id="title">${ele.title}</div>
       <div id="image"><img src="${ele.image}"/></div>
       <div id="category_div">
           <div>${ele.category}</div>
           <div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/></div>
       </div>
       <div id="price">${ele.price}</div>
   </div>`
      })
 }
 function showbycategory(){
 
   fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    .then((res)=>res.json())
    .then((data)=>showresultbycategory(data.data))
 }

 function showresultbycategory(data){
    let category=document.getElementById("Category").value
    let a=data.filter((ele)=>{
        return ele.category==category
    })
    a.map((ele)=>{
         console.log(ele.image)
      container.innerHTML+=`
      <div id="card"> 
      <div id="brand">${ele.brand}</div>
      <div id="title">${ele.title}</div>
      <div id="image"><img src="${ele.image}"/></div>
      <div id="category_div">
          <div>${ele.category}</div>
          <div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/></div>
      </div>
      <div id="price">${ele.price}</div>
  </div>`
     })
}
function showbysortfetcing(){
   
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    .then((res)=>res.json())
    .then((data)=>showsortby(data.data))
}
 function showsortby(data){
      let sort =document.getElementById("sort").value;
       if(sort=="high"){
        data.sort(function(a,b){
            return a.price-b.price
        })
       }else{
       
            data.sort(function(a,b){
                return b.price-a.price
            })
       }
       data.map((ele)=>{
      
     container.innerHTML+=`
     <div id="card"> 
     <div id="brand">${ele.brand}</div>
     <div id="title">${ele.title}</div>
     <div id="image"><img src="${ele.image}"/></div>
     <div id="category_div">
         <div>${ele.category}</div>
         <div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/></div>
     </div>
     <div id="price">${ele.price}</div>
 </div>`
    })
       

 }