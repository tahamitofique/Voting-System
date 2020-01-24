const admin = document.querySelector("#admin_form");
const pos = document.querySelector("#positionn");
const ggdd = document.querySelector('#guidesss');



//loading positions for result
db.collection('positions').onSnapshot(snapshot => {
    setuprrespos(snapshot.docs)
})
//display details
const setuprrespos = (data) => {
let html = '';
data.forEach(doc => {
    const candidate = doc.data();
    const tr = `
    <option>${candidate.candiposition}</option>
    `;
    html += tr;
});
pos.innerHTML = html;
}

//calculate votes
pos.addEventListener('change', (e) => {
        e.preventDefault();
        var names=[];
        let html = '';
        db.collection('votes').onSnapshot(snapshot => {
            var data=snapshot.docs;
            data.forEach(doc =>{
            const candidate = doc.data();  
            names.push(candidate.name)
            })
            var outputArray = []; 
            var count = 0; 
            var start = false; 
          
            for (j = 0; j < names.length; j++) { 
                for (k = 0; k < outputArray.length; k++) { 
                   if ( names[j] == outputArray[k] ) { 
                       start = true; 
                 } 
                } 
                count++; 
                if (count == 1 && start == false) { 
                    outputArray.push(names[j]); 
                } 
                start = false; 
                count = 0; 
            } 
            outputArray.forEach(name =>{
                db.collection('votes').where('position','==',pos.value).where('name','==',name).onSnapshot(snap => {
                    size = snap.size // will return the collection size
                    //console.log(pos.value,name,size>0?size:null);
                    if(size>0){
                    const tr=`
                        <tr>
                            <td>${pos.value}</td>
                            <td>${name}</td>
                            <td>${size>0?size:null}</td>
                        </tr>
                        `;
                        html += tr;}
                    ggdd.innerHTML = html;
                 });
    
            }); 
        })
        
        
    })







