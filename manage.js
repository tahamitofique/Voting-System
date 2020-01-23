const signup_form = document.querySelector('#managecandidates');
signup_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const Name = document.querySelector("#candidatename").value;
    const position = document.querySelector("#candidatePosition").value;



    db.collection('positions').add({
        candiname: Name,
        candiposition: position
    })


})

db.collection('positions').onSnapshot(snapshot => {
    setupGuides(snapshot.docs)
})
//display details
const setupGuides = (data) => {
let html = '';
data.forEach(doc => {
    const candidate = doc.data();
    const tr = `
    <tr>
    <td>${candidate.candiname}</td>
    <td>${candidate.candiposition}</td>
</tr>
    `;
    html += tr;
});
guides.innerHTML = html;
}