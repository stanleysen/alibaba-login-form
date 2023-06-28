var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validation(){
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    var password2 = document.querySelector('#password2');

    var emailStatus = document.querySelector('#email-error');
    var passStatus = document.querySelector('#pass-error');
    var pass2Status = document.querySelector('#pass-2-error');

    // email
    // email kosong
    if(email.value == ''){
        email.style.border = '1px solid #e74c3c';
        emailStatus.style.visibility = 'visible';
        
    // email validation
    } else if(!email.value.match(emailRegex)){
        email.style.border = '1px solid #e74c3c';
        emailStatus.innerHTML = 'Invalid email address.';
        emailStatus.style.color = '#e74c3c';
        
    // kondisi bener
    } else {
        email.style.border = '1px solid #159257';
        emailStatus.innerHTML = 'Your email address is valid.';
        emailStatus.style.color = '#159257';
    }
    
    
    // password
    // kalo pass kosong
    if(password.value == ''){
        password.style.border = '1px solid #e74c3c';
        passStatus.style.visibility = 'visible';

        
    // panjang karakter minimum 8
    } else if(password.value.length < 8){
        password.style.border = '1px solid #e74c3c';
        passStatus.innerHTML = 'Password must at least 8 characters.';
        pass2Status.style.color = '#e74c3c';

    // kondisi bener
    } else {
        password.style.border = '1px solid #159257';
        passStatus.innerHTML = 'Password is valid.';
        passStatus.style.color = '#159257';
    }
    
    // confirm pass
    // conf pass kosong
    if(password2.value == ''){
        password2.style.border = '1px solid #e74c3c';
        pass2Status.style.visibility = 'visible';
        
        // conf pass ga sama
    } else if(password2.value != password.value){
        password2.style.border = '1px solid #e74c3c';
        pass2Status.innerHTML = 'Password does not match.';
        pass2Status.style.color = 'e74c3c';
    
    // kondisi bener
    } else {
        password2.style.border = '1px solid #159257';
        pass2Status.innerHTML = 'Password is valid.';
        pass2Status.style.color = '#159257';
    }
    


}