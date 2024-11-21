// Selectors
var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var schoolInput = document.getElementById('school');
var yearInput = document.getElementById('year');
var companyInput = document.getElementById('company');
var roleInput = document.getElementById('role');
var durationInput = document.getElementById('duration');
var skillsInput = document.getElementById('skills');
var resName = document.getElementById('res-name');
var resEmail = document.getElementById('res-email');
var resDegree = document.getElementById('res-degree');
var resSchool = document.getElementById('res-school');
var resYear = document.getElementById('res-year');
var resCompany = document.getElementById('res-company');
var resRole = document.getElementById('res-role');
var resDuration = document.getElementById('res-duration');
var resSkills = document.getElementById('res-skills');
// Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Personal Info
    resName.textContent = nameInput.value;
    resEmail.textContent = emailInput.value;
    // Education
    resDegree.textContent = degreeInput.value;
    resSchool.textContent = schoolInput.value;
    resYear.textContent = yearInput.value;
    // Work Experience
    resCompany.textContent = companyInput.value;
    resRole.textContent = roleInput.value;
    resDuration.textContent = durationInput.value;
    // Skills
    resSkills.innerHTML = ''; // Clear previous skills
    var skillsArray = skillsInput.value.split(',');
    skillsArray.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        resSkills.appendChild(li);
    });
});
