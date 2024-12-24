const patients_portal = document.querySelector("#patients-portal");
const doctors_portal = document.querySelector("#doctors-portal");
const container = document.querySelector(".container");

patients_portal.addEventListener('click', () => {
    container.classList.add("patients-portal-mode");
})

doctors_portal.addEventListener('click', () => {
    container.classList.remove("patients-portal-mode");
});