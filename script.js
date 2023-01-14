const l = []

function add() {
    const name = document.getElementById('name').value;
    const proffession = document.getElementById('proffession').value;
    const age = document.getElementById('age').value;

    console.log(name, proffession, age);

//   *********ALERT********
    if (name === '' || proffession === '' || age === '') {
        const m = document.getElementById('m')
        m.style.color = 'red';

        m.innerHTML = 'Error : Please Make sure All the fields are filled before adding in an employee !'
        m.style.marginLeft = '30px';
        table.style.display = 'none';
    } 
    else {
        m.innerHTML = 'Success : Employee Added!'
        m.style.color = 'green';
        m.style.marginLeft = '30px';


        
        const a = document.getElementById('a')
        a.style.display = 'none';

        l.push({
            name: name,
            proffession: proffession,
            age: age,})
    }

    //********TABLE**************
    let list = document.getElementById('list')
    list.innerHTML = '';

    l.map((el, i)=> {

        list.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.proffession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>
        
`
    })

}

function d(el) {
    delete l[el]
    list.innerHTML = ''
    l.map((el, i)=> {

        list.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.proffession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>
`
    })
}
console.log(list)

