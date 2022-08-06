const signInBtn = document.getElementById("sign-in")
const input = document.getElementById('login-input')
const registerNewPatient = document.getElementById("new-patient")

if(signInBtn){
    signUp()
}else if(registerNewPatient){
    accessPatient()
}

function signUp(){

    signInBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        const form = document.getElementById("sign-in-form")
        form.style.display = 'block'
        document.getElementById('login-btn').addEventListener( 'click',(e) =>{
            e.preventDefault()
            document.location.href = '/landing-page.html';
        })

    })

}



function accessPatient(){
    registerNewPatient.addEventListener('click', (e) => {
        console.log('yes')
        e.preventDefault()
        window.location.href = '/form.html'
    })
}