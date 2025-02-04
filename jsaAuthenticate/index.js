function showForm(type) {
    console.log('heloo',type);
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.add('d-none');
    if (type == 'register'){
        document.getElementById('registerForm').classList.remove('d-none');

    }
    else if (type =='login'){
        document.getElementById('loginForm').classList.remove('d-none');    
    }
}

function register(){
    const full_name=document.getElementById('regName').value;
    const email=document.getElementById('regEmail').value;
    const password=document.getElementById('regPassword').value;
    const user={full_name,email,password};
    localStorage.setItem(email,JSON.stringify(user));
    alert("Registration successfull!! You can now login");
    showForm('login');
    document.getElementById('regName').value=' ';
    document.getElementById('regEmail').value='';
    document.getElementById('regPassword').value='';

}

login=()=>{
    const email=document.getElementById('loginEmail').value;
    const password=document.getElementById('loginPassword').value;
    const user=JSON.parse(localStorage.getItem(email));
    if(user.password==password){
        alert("Login successfull");
    }
    else{
        alert("Invalid credentials please try again");
    }
    document.getElementById('loginEmail').value=" ";
    document.getElementById('loginPassword').value="";
    
}