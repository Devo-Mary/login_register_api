let userName = document.getElementById('userName')
let password = document.getElementById('password')
let errorLogin = document.getElementById('errorLogin')
let icons = document.querySelectorAll('.icon')
let body = document.querySelector('body')
let darkMode = document.querySelector('.dark-mode')
let login = document.querySelector('#loginInput')

let hide = false

let data = JSON.parse(localStorage.getItem('userArray'))

form.addEventListener('submit',(e)=>{
    e.preventDefault()
  let loggedUser  =  data.find(item =>{
        if ( userName.value == item.userName &&   password.value == item.password) {
            return item 
        }
        else{
            errorLogin.style.display = 'block'
        }
    })
    if(loggedUser){
        window.location.assign('./index.html')
    }
    else{
        alert('bele user yoxdur')
    }
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
})
icons.forEach(icon =>{
    icon.addEventListener('click', ()=>{
        if (hide == false) {
            icon.previousElementSibling.type= "text"
            hide = true
        }
        else {
            icon.previousElementSibling.type = "password"
            hide = false
        }
        icon.firstElementChild.classList.toggle('active');
        icon.lastElementChild.classList.toggle('active');
    })
} )
window.onload = () =>{
    if (localStorage.getItem('darkMode') === 'true'){
        body.style.backgroundColor = '#2b4162'
        body.style.backgroundImage = 'linear-gradient(315deg, #2b4162 0%, #12100e 74%)'
        login.style.backgroundColor = '#2b4162'
        login.style.backgroundImage = 'linear-gradient(315deg, #2b4162 0%, #12100e 74%)'
        darkMode.firstElementChild.classList.remove('active');
        darkMode.lastElementChild.classList.add('active');
    }
    else{
        body.style.background = 'linear-gradient(135deg, #71b7e6, #9b59b6)'
        login.style.background = 'linear-gradient(135deg, #71b7e6, #9b59b6)'
        darkMode.firstElementChild.classList.add('active');
        darkMode.lastElementChild.classList.remove('active');
    }
}
darkMode.addEventListener('click', ()=>{
    if (localStorage.getItem('darkMode') === 'true') {
        body.style.background = 'linear-gradient(135deg, #71b7e6, #9b59b6)';
        login.style.background = 'linear-gradient(135deg, #71b7e6, #9b59b6)';
        localStorage.setItem('darkMode', 'false')
    }
    else{
        body.style.backgroundColor = '#2b4162';
        body.style.backgroundImage = 'linear-gradient(315deg, #2b4162 0%, #12100e 74%)';
        login.style.backgroundColor = '#2b4162';
        login.style.backgroundImage = 'linear-gradient(315deg, #2b4162 0%, #12100e 74%)';
        localStorage.setItem('darkMode', 'true')

    }
    darkMode.firstElementChild.classList.toggle('active')
    darkMode.lastElementChild.classList.toggle('active')
})