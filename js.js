const url = 'https://jsonplaceholder.typicode.com/users';

let button = document.getElementById('button')

button.addEventListener('click', () => {
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastname').value;
    let fecha = document.getElementById('date').value;

    fetch(url, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            name: nombre,
            lastname: apellido,
            date: fecha
        })
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.getElementById('name').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('date').value = "";
        alert('Los datos se enviaron correctamente');
    })

    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
});