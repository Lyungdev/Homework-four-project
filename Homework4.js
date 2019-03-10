/* Using XMLHttpRequest to get and sort user's email in alphabetical order */
function PopulateWithXMLRequest() {
    const req = new XMLHttpRequest(); 
    req.open('GET', 'https://jsonplaceholder.typicode.com/users'); 
    req.onload = function () { 
        if (req.status == 200) {
            let responseJson = JSON.parse(req.response);

            let emailList = [];
            for(i in responseJson) {
                emailList.push(responseJson[i].email);
            }
            emailList.sort();

            var boxes  = document.getElementsByClassName('box');
            var ul = document.createElement('ul');
            boxes[0].appendChild(ul);

            for(var i=0; i < emailList.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = emailList[i];
                ul.appendChild(li);
            }
        } else { 
            console.log('ERROR', req.statusText); 
        } 
    };
    req.onerror = function () { 
        console.log('Network Error'); 
    }; 

    req.send(); // Add request to task queue
}

/* Using fetch and promise to get and sort username by length */
function PopulateWithFetch() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            
            let userNameList = [];
            for(i in myJson) {
                userNameList.push(myJson[i].username);
            }
            userNameList.sort(function(a, b){
                return (a.length - b.length); 
            });
            
            var boxes  = document.getElementsByClassName('box');
            var ul = document.createElement('ul');
            boxes[1].appendChild(ul);

            for(var i=0; i < userNameList.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = userNameList[i];
                ul.appendChild(li);
            }
        });
}

/*  Main function to be called on page load  */
function Main() {
    PopulateWithXMLRequest();
    PopulateWithFetch();
}
