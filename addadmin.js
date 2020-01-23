const signoutt=document.querySelector('#logouttt')

admin.addEventListener('submit', (e) => {
    e.preventDefault();

    const adminn_id = document.querySelector("#admin_id").value; //ye id kahn ha
    const admin_pass = document.querySelector("#admin_psw").value;
    console.log(adminn_id, admin_pass)

    auth.signInWithEmailAndPassword(adminn_id, admin_pass).then(cred => {
       console.log(cred);
        admin.reset();
        $('#adminmodal').modal('toggle');
        window.location= 'homeadmin.html'
    })
})

signoutt.addEventListener('click', (e) => {
    e.preventDefault();
    window.location = 'index.html';
    auth.signOut().then(res => {
        alert('User sign out')
        window.location = 'index.html';

    }).catch(err => alert(err));
    console.log("out")
})