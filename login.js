const signin_form = document.querySelector("#login-form");

// signup form
signin_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.querySelector("#user_id").value;
    const pswd = document.querySelector("#lpassword").value;
    console.log(id, pswd)

    auth.signInWithEmailAndPassword(id, pswd).then(cred => {
        console.log(cred);
        localStorage.setItem("id",id);
        signin_form.reset();
        $('#loginModal').modal('toggle');
        window.location= 'voting.html'; //is seredirect ho raha hai

        })
    })