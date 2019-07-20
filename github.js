



document.querySelector('form').addEventListener('submit', loadEmployee);






function loadEmployee(e){
    //xhr - xmlhttpRequest 
    const xhr = new XMLHttpRequest()
    const userInfo = document.getElementById("userName").value;
console.log("yes")
e.preventDefault();
console.log(userInfo);
console.log(`https://api.github.com/users/${userInfo}`)

    //open connection 
    xhr.open('GET', `https://api.github.com/users/${userInfo}`,true)

    xhr.onload= function(){
        if(this.status == 200){
            const data = JSON.parse(this.responseText)
            console.log(data)
            const output = `
            
               <ul>
               <img  width = 20% height = 20% src = ${data.avatar_url} </img>
               <li>ID: ${data.id} </li>
               <li>Name: ${data.name} </li>
               <li>Company: ${data.company} </li>
               <li>Bio: ${data.bio} </li>
               <li>Public Repos: ${data.public_repos} </li>

               </ul>
              
            `;

        document.getElementById('employee').innerHTML = output

        
            
        }
     else {
        document.getElementById('not-found').innerHTML = "No user found"
        document.getElementById('image').innerHTML= '<img width=100px src="thesadface.jpg" />'; 
        console.log('yes')
     }

    }

    //send the request 
    xhr.send()


}




