/* const items = {
    'projects': [{
        'id': 0,
        'projectName': 'StormPet',
        'projectImg': 'https://www.collinsdictionary.com/images/full/storm_167600330.jpg',
        'leader': 'Elias Flores',
        'beginDate': '2021-08-09',
        'endDate': '2021-10-09',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 1,
        'projectName': 'TecnoGaming',
        'projectImg': 'https://img.blogs.es/campusomenhp/wp-content/uploads/2020/04/Abre_gaming.jpeg',
        'leader': 'Alexis Garcia',
        'beginDate': '2021-08-09',
        'endDate': '2021-10-09',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    }]
};

if (window.sessionStorage.getItem('projects') === null) {
    window.sessionStorage.setItem('projects', JSON.stringify(items.projects));
} */
let projects = [];
window.onload = function () {
    const endpoint = 'http://localhost:8080/api/project/';
    const promise = fetch(endpoint);

    promise.then(data => {
        return data.json(data);
    })
        .then(data => {
            projects = data;
            let user = JSON.parse(window.localStorage.getItem('UsuarioRegistrado'));
            console.log(user);
            let userProjects = projects.filter((project) => {
                return (project.idusuario == user.idUser);
            });
            createCards(userProjects);
        });//promise
}

function createCards(projects) {
    const ancla = document.getElementById('projects');
    //ul    

    let plantillaFinal = '';

    projects.forEach(function (project) {
        let card = `<div class="col-sm-11 col-md-11 col-lg-5 col-xl-5 alto">
        <div class="card h-100">
          <img src="${project.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text">${project.descripcion}</p>
          </div>
          <div class="card-footer">
              <a href=""><i class="fas fa-money-bill"></i></a> <a href=""><i class="fas fa-heart"></i></a>
          </div>
        </div>
  </div>`;

        plantillaFinal = plantillaFinal + card;

    });
    ancla.innerHTML = plantillaFinal;
}