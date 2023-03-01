const pdf = document.getElementById('pdf');
const bOn = document.getElementById('on');
const bOff = document.getElementById('off');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const nMode = document.getElementById('nMode');
const main = document.querySelector('.main');
const grid = document.getElementById('grid');
const img = document.querySelector('.pf-img');
const nameT = document.querySelector('#nameT');
const resume = document.querySelector('#resume');
const information = document.querySelector('#information');
const experience = document.querySelector('#experience');
const skills = document.querySelector('#skills');
const aboutMe = document.querySelector('#aboutMe');
const contact = document.querySelector('#contact');
const imgBox = document.querySelector('#imgBox img');
const pinfo = document.querySelector('.pinfo');
const pexp = document.querySelector('.pExp');
const pSkills = document.querySelector('.pSkills');
const pAboutMe = document.querySelector('.pAboutMe');
const pContact = document.querySelector('.pContact');
const pContact2 = document.querySelector('.pContact2');

bOn.addEventListener('click', function () {
    bOn.id = 'on';
    bOff.id = 'off';
    moon.id = 'moon';
    sun.id = 'sun';
    main.className = 'main';
    grid.id = 'grid';
    pdf.id = 'pdf';
    nMode.id = 'nMode';

})

bOff.addEventListener('click', function () {
    bOn.id = 'onD';
    bOff.id = 'offD';
    moon.id = 'moonD';
    sun.id = 'sunD';
    main.className = 'mainD';
    grid.id = 'gridD';
    pdf.id = 'pdfD';
    nMode.id = 'nModeD'

})


imgBox.addEventListener('mouseover', () => {
    imgBox.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
  });
  
  imgBox.addEventListener('mouseout', () => {
    imgBox.style.boxShadow = 'none';
  });

//API
fetch('https://randomuser.me/api/')
    .then(function (answer) {
        return answer.json()
    })
    .then(function (data) {
        //Information 
        let person = data.results[0];

        img.src = person.picture.large;

        nameT.innerHTML = person.name.first + ' ' + person.name.last;

        information.addEventListener('click', function () {
            pinfo.style.display = 'block'
            information.id = (information.id === 'information') ? 'information2' : 'information';
            pinfo.innerHTML = (information.id === 'information2') ? 'My name is ' + person.name.first + '  ' + person.name.last + " and I'm from " +
            person.nat + " I'm " + person.dob.age + '.' : ' ';
            closeI[0].style.display = (information.id === 'information2') ? 'block': 'none' ;
        })


        experience.addEventListener('click', function () {
            experience.id = (experience.id === 'experience')? 'information2' : 'experience';
            pexp.style.display = (experience.id === 'experience') ? 'none' : 'block';
        })

        skills.addEventListener('click', function () {
            skills.id = (skills.id === 'skills') ? 'information2': 'skills';
            pSkills.style.display = (skills.id === 'skills')? 'none': 'block';

        })
        aboutMe.addEventListener('click', function () {
            aboutMe.id = (aboutMe.id === 'aboutMe') ? 'information2' : 'aboutMe';
            pAboutMe.style.display = (aboutMe.id === 'aboutMe')? 'none': 'block';
        })
        contact.addEventListener('click', function () {
            contact.id = (contact.id === 'contact') ? 'information2' : 'contact';
            pContact.innerHTML =  person.email;
            pContact2.innerHTML = person.phone;
            pContact.style.display = (contact.id === 'contact') ? 'none' : 'block';
            pContact2.style.display = (contact.id === 'contact') ? 'none' : 'block';
        })
    })