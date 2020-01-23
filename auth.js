const signup_form = document.querySelector('#signupform');
const usr= document.querySelector('#userss');
const updateFORM = document.querySelector('.updateFORM');

db.collection('users').onSnapshot(snapshot => {
    setupuser(snapshot.docs)
    //console.log(snapshot.docs)
})

const setupuser = (data) => {
    let html = '';
    data.forEach(doc => {
        const candidate = doc.data();
        // console.log(candidate)
        const tr=`
        <tr id="${doc.id}">
        <td>${candidate.name}</td>
        <td>${candidate.email}</td>
        <td>${candidate.gender}</td>
        <td>  <a  class="update"><i class="fas fa-edit"></i></a></td>
        </tr>
        
        `;
        html += tr;
    });
    usr.innerHTML = html;
   
    
    // using the event delegation here to stop the prop
    document.querySelector('.table').addEventListener('click', (e) => {

        e.preventDefault();
        

        if(e.target.className === "fas fa-edit"){
            let id = e.target.parentElement.parentElement.parentElement.id; 
    
            const name = e.target.parentElement.parentElement.parentElement.childNodes[1].textContent;
            const email = e.target.parentElement.parentElement.parentElement.childNodes[3].textContent;
            const gender = e.target.parentElement.parentElement.parentElement.childNodes[5].textContent;
    
             const n = document.querySelector('#username').value =name
             const ee = document.querySelector('#email').value = email;
             const g = document.querySelector('#gender').value = gender;


             e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].addEventListener('submit', (event) => {
                const updaten = document.querySelector('#username').value 
                const updateee = document.querySelector('#email').value 
                const updateg = document.querySelector('#gender').value 
                           db.collection('users').doc(id).update({
                               email: updateee ? updateee : ee,
                               gender: updateg ? updateg : g,
                               name: updaten ? updaten : n,
                           })
                event.preventDefault()
            })

            

        }
     
      
       
      
        
       
    })
   
}




const UP = document.querySelector('.update');


signup_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.querySelector("#fname").value;
    const sex = document.querySelector("#gen").value;
    const emailAddress = document.querySelector("#email").value;
    const psw = document.querySelector("#password").value;
    const pass = document.querySelector("#re_enter").value;
    //console.log(fullName, sex, emailAddress, psw, pass)

    auth.createUserWithEmailAndPassword(emailAddress, psw).then(cred => {
        //console.log(cred);
        signup_form.reset();
        $('#registerModal').modal('toggle');
        db.collection('users').add({
            name: fullName,
            email: emailAddress,
            gender: sex,
            pswd: psw
        })


    })

})







