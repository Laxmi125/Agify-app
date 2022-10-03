const name=document.getElementById('name');
const age_result=document.getElementById('ageDisplay');
const button = document.querySelector('#button1');

button.addEventListener('click', function(){
    getAge();
})

function getAge(){
    const name=document.getElementById('name').value;
    console.log("Name",name)
    const ajax = new XMLHttpRequest;
    const url = `https://api.agify.io/?name=${name}`;

    ajax.open('GET', url, true);

    ajax.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            let data = JSON.parse(this.responseText);
            age_result.innerHTML = `${data.age}`
        } else {
            this.onerror = onerror();
        }
    }
    ajax.send();
}

function onerror(){
     age_result.textContent = 'There was an error!';  
}


//-------------------- OLD------------------------------------------------------

// const name=document.getElementById('name');
// const age_result=document.getElementById('ageDisplay');
// button1.addEventListener('click',getAge);
// function getAge(name){
//     fetch('https://api.agify.io/?name=${name}')         
//     .then(res=>res.json())
//     .then(data=>{
//         age_result.innerHTML=`${data.age}`
//     })    
// }
