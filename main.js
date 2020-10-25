let myArray =[
    {"name": "Mickael","age": 30,"birthdate": "5/10/1800"},
    {"name": "Mila","age": 32,"birthdate": "1/10/1990"},
    {"name": "Paul","age": 29,"birthdate": "11/10/2000"},
    {"name": "Dennis","age": 25,"birthdate": "18/12/1989"},
    {"name": "Tim","age": 27,"birthdate": "23/10/1989"},
    {"name": "Erik","age": 24,"birthdate": "18/20/1989"}
];
let text ;
let ths = document.querySelectorAll('th');
let arrows = document.querySelectorAll('span');


for (const th of ths) {
    th.addEventListener('click', function (e) {
        let column = this.getAttribute('data-column');
        let order = this.getAttribute('data-order');
        let text =  this.childNodes[1].textContent;

        if (order === 'desc') {
            this.setAttribute('data-order', 'asc');
            myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1);
            text = '▼';
            
        } else {
            this.setAttribute('data-order', 'desc');
            myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1);
            text = '▲';

        }


buildTable(myArray);

    });

}

//let responJson = getJson();

buildTable(myArray);


function buildTable(data) {
    let table = document.getElementById('myTable');
    table.innerHTML ='';

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                    </tr>`;

        table.innerHTML += row;
    }
}


function func(url) {
    return new Promise((resolve, reject) => {
        fetch(url)  // return this promise
            .then(response => response.json())
            .then(json => resolve((json.results)))
    });
}


func('https://randomuser.me/api/?results=10')
    .then(users => console.log(users))




    
