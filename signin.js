const signoutt = document.querySelector('#signout');
const guides = document.querySelector('#guides');
const positions = document.querySelector('#position');
const candidates = document.querySelector('#candidate');
const voteform = document.querySelector('#voteform');
const resposition = document.querySelector('#respos');

//signoutt.style.display = 'none';


//loading positions for result
db.collection('positions').onSnapshot(snapshot => {
    setuprespos(snapshot.docs)
})
//display details
const setuprespos = (data) => {
let html = '';
data.forEach(doc => {
    const candidate = doc.data();
    const tr = `
    <option>${candidate.candiposition}</option>
    `;
    html += tr;
});
resposition.innerHTML = html;
}


//stateChange
auth.onAuthStateChanged(user => {
    if (user) {
        //user.getIdTokenResult().then(idTokenResult => {
            //user.admin = idTokenResult.claims.admin;
            signoutt.style.display = 'block';
        //})
        console.log("login");
        //window.location = 'voting.html'; 
    } else {

        console.log("logout");
        //signoutt.style.display = 'none';

    }

    //1) When user login, logout, signup ka button pakro usko hide mardu
    // 2) When user logout, singin aur signup ka button show krdu getelementbyid kr kay
})

//signout
signoutt.addEventListener('click', (e) => {
    e.preventDefault();
    window.location = 'index.html';
    auth.signOut().then(res => {
        alert('User sign out')
        window.location = 'index.html';

    }).catch(err => alert(err));
    console.log("out")
})

//loading positions
db.collection('positions').onSnapshot(snapshot => {
    setuppos(snapshot.docs)
})
//display details
const setuppos = (data) => {
let html = '';
data.forEach(doc => {
    const candidate = doc.data();
    const tr = `
    <option>${candidate.candiposition}</option>
    `;
    html += tr;
});
positions.innerHTML = html;
}
//load available candidate wrt position
positions.addEventListener('change', (e) => {
const guides = document.querySelector('#guides');
    e.preventDefault();
    const valuee = document.querySelector('#position').value;
    db.collection('positions').where('candiposition','==',valuee).onSnapshot(snapshot => {
        setupcan(snapshot.docs)
    })
})

const setupcan = (data) => {
    let html = '';
    data.forEach(doc => {
        const candidate = doc.data();
        const tr = `
        <option>${candidate.candiname}</option>
        `;
        html += tr;
    });
    candidates.innerHTML = html;
}



