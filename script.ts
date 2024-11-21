// Selectors
const form = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const schoolInput = document.getElementById('school') as HTMLInputElement;
const yearInput = document.getElementById('year') as HTMLInputElement;
const companyInput = document.getElementById('company') as HTMLInputElement;
const roleInput = document.getElementById('role') as HTMLInputElement;
const durationInput = document.getElementById('duration') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

const resName = document.getElementById('res-name') as HTMLElement;
const resEmail = document.getElementById('res-email') as HTMLElement;
const resDegree = document.getElementById('res-degree') as HTMLElement;
const resSchool = document.getElementById('res-school') as HTMLElement;
const resYear = document.getElementById('res-year') as HTMLElement;
const resCompany = document.getElementById('res-company') as HTMLElement;
const resRole = document.getElementById('res-role') as HTMLElement;
const resDuration = document.getElementById('res-duration') as HTMLElement;
const resSkills = document.getElementById('res-skills') as HTMLElement;

// Form Submission
form.addEventListener('submit', (event) => {
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
    const skillsArray = skillsInput.value.split(',');
    skillsArray.forEach((skill) => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        resSkills.appendChild(li);
    });
});
