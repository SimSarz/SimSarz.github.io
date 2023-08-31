const addAnimationProject = (projects) =>{
    const animations = document.querySelector('.animationsProject');

    projects.forEach(project =>{

        //Project properties
        let projectName = project.name;
        let projectDate = project.date;
        let projectImg = project.imgSrc;
        let projectTechnologies = project.technologies;
        let projectDescription = project.description;

        //Card properties
        let projectCard = document.createElement('section');
        let projectCardHeader = document.createElement('header');
        let projectCardTechList = document.createElement('ul');
        let projectCardTechListItem = document.createElement('li');

        projectCardHeader.innerHTML = `<h2>${projectName}</h2>`;
        projectCardHeader.innerHTML += `<h3>${projectDate}</h3>`;
        projectCard.appendChild(projectCardHeader);

        projectCard.innerHTML += `<img src='${projectImg}'/>`;

        projectTechnologies.forEach(technology => {
            projectCardTechListItem.innerHTML += `${technology}`;
            if (projectTechnologies.indexOf(technology) !== projectTechnologies.length -1){
                projectCardTechListItem.innerHTML += ` / `;
            }
            projectCardTechList.appendChild(projectCardTechListItem);
        })
        projectCard.appendChild(projectCardTechList);
        projectCard.innerHTML += `<p>${projectDescription}</p>`;

        animations.appendChild(projectCard);

    })
}


const getAnimationProjects = () => {
    fetch('../data/animations.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => addAnimationProject(data))
        .catch(error => {
            console.error(error);
        });
};

getAnimationProjects();