const votebtn = document.querySelector('#voteSubmit');





votebtn.addEventListener('click', (e) => {
    e.preventDefault();
    var name
    //const pos = document.querySelector('#position').value;
    //const cann = document.querySelector('#candidate').value;
    localStorage.setItem("pos",document.querySelector('#position').value);
    localStorage.setItem("cann",document.querySelector('#candidate').value);
    window.location = 'indexxx.html';
    var t=localStorage.getItem("cann");
    var i=localStorage.getItem("pos");
    db.collection("votes").add({
        name: t,
        position: i
    })
   // alert("Successfully Submitted ")
})
