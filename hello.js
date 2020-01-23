const respositionn = document.querySelector('#respos');
const ggd = document.querySelector('#guidesss');


//calculate votes
resposition.addEventListener('change', (e) => {
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
            db.collection('votes').where('position','==',respositionn.value).where('name','==',name).onSnapshot(snap => {
                size = snap.size // will return the collection size
                //console.log(respositionn.value,name,size>0?size:null);
                if(size>0){
                const tr=`
                    <tr>
                        <td>${respositionn.value}</td>
                        <td>${name}</td>
                        <td>${size>0?size:null}</td>
                    </tr>
                    `;
                    html += tr;}
                ggd.innerHTML = html;
             });

        }); 
        
    })
    
    
})
