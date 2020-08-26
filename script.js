
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const age = document.getElementById('age');
    const add = document.getElementById('add');
    const showCompany = document.getElementById('showPersons');
    const showStats = document.getElementById('showStats');
    const persons = document.getElementById('persons');
    const stats = document.getElementById('stats');
    const salary = document.getElementById('salary');

    const company = new Company();

    showStats.onclick = () => {

        if (stats.firstElementChild) {
            stats.replaceChild(company.stats, stats.firstElementChild);
        } else {
            stats.appendChild(company.stats);
        }
    };


    add.onclick = () => {
        let employee = new Employee(firstName.value.trim(), lastName.value.trim(), age.value, salary.value);
        company.addEmployee(employee);
        firstName.value = lastName.value = age.value = salary.value = '';
    };


    showCompany.onclick = () => {
        while (persons.firstElementChild) {
            persons.removeChild(persons.firstElementChild);
        }
        persons.innerHTML = company.employeesList.reduce((accum, li) => accum + li, '');


    };
