
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isPasswordValid=password=>{
    const reg=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return reg.test(String(password))
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

if(passwordValue === '') {
    setError(password, 'Password is required');
} else if (!isPasswordValid(passwordValue)) {
    setError(password, 'Password must be at least 8 character.')
} else {
    setSuccess(password);
}

if(window.localStorage)
{
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const submit=document.getElementById("submit")

    submit.onclick=function()
    {
        const key=email.value;
        const value=password.value;

        if(isValidEmail(key)&& isPasswordValid(value) )
        {
                     localStorage.setItem(key,value);
                    location.reload();        
                    confirm(`Hi `+ key)   
        }

        
    }

}
  const data = { name: 'sindhujas@mailinator.com', password: "Test@2021" };
                fetch('https://gs-dev.qa-enphaseenergy.com/session-mgr/api/v1/admin/signin/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });

}























