// console.log(fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRR2VFFZFHPXn3nlXyt6LSDOX8BSmi5QKjg&s')

// .then(response => {
//     console.log(response)
//     return response.blob();
// })

// .then(blob =>{
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })

// .catch(error =>{
//     console.log(error)
// })

// )




//id selector
const content=document.querySelector("#content")

//loading page
window.addEventListener("load", () =>{
    getUsers()
})

function getUsers(){
    let html=""
    
    fetch("https://bscs-crud-api-10.onrender.com/api/members" , {mode: "cors"})
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element) =>{
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })

        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })

}