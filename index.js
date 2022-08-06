const signInBtn = document.getElementById("sign-in")
const input = document.getElementById('login-input')
const registerNewPatient = document.getElementById("new-patient")
const fixed = document.getElementById("fixed")
const cont = document.getElementById("cont")
const fixed_opsEl = document.getElementById("fixed_ops")
const continueEl = document.getElementById("continue")
console.log(cont)

if(signInBtn){
    signUp()
}else if(registerNewPatient){
    accessPatient()
}
else if(cont){
    repeat()
}

if(fixed){
    fixed_ops()
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


function fixed_ops(){

    fixed.addEventListener('click', (e) =>{
        e.preventDefault()
        fixed_opsEl.style.display = 'block'
        continueEl.style.display = 'none';
        })

}

function repeat(){

    cont.addEventListener('click', (e) =>{
        e.preventDefault()
        continueEl.style.display = 'block'
        fixed_opsEl.style.display = 'none';
        })

}
