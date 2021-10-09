fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let links = data;

        for (let link_no = 0; link_no <= ((links.length) - 1); link_no++) {

            let linkdiv = document.createElement('li');
            linkdiv.innerHTML = 
    `   <div clas="timeline-content">
            <h5 class="date"> ${data[link_no].date} </h5>
            <h1> ${data[link_no].name} </h1>
            <img src="${data[link_no].image}">
            <p> ${data[link_no].info} </p>
        </div>
        </div>   
    `;
    

         document.getElementById('item').appendChild(linkdiv);            
        }

    });

  