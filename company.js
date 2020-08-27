class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    };

    addEmployee = function (employee) {
        this._employees.push(employee);
    };

    get employeesList() {
        return this._employees.map(employee => employee.listItem);

    };

    get size() {
        return this._employees.length;
    };

    get totalSalary() {
        return this._employees.reduce((accum, employee) => accum + employee.salary, 0);
    }

    get avgSalary() {
        return this.totalSalary / this.size;
    }

    get agesList() {
        return this._employees.map(employee => employee.age);
    }

    get minAge() {
        return Math.min(...this.agesList);
    }

    get maxAge() {
        return Math.max(...this.agesList);
    }

    get avgAge() {
        return this.agesList.reduce((a, b) => a + b, 0) / this._employees.length;
    }

    get stats() {
        let stats = document.createElement('div');
        let pSalary = document.createElement('p');
        pSalary.appendChild(document.createTextNode(`Total salary: ${this.totalSalary}`));
        let pAvg = document.createElement('p');
        pAvg.appendChild(document.createTextNode(`Average salary: ${this.avgSalary}`));
        let pSize = document.createElement('p');
        pSize.appendChild(document.createTextNode(`Size: ${this.size}`));
        let pMaxAge = document.createElement('p');
        pMaxAge.appendChild(document.createTextNode(`Max age: ${this.maxAge}`));
        let pMinAge = document.createElement('p');
        pMinAge.appendChild(document.createTextNode(`Min age: ${this.minAge}`));
        let pAvgAge = document.createElement('p');
        pAvgAge.appendChild(document.createTextNode(`Average age: ${this.avgAge}`));
        stats.appendChild(pSalary);
        stats.appendChild(pAvg);
        stats.appendChild(pSize);
        stats.appendChild(pMaxAge);
        stats.appendChild(pMinAge);
        stats.appendChild(pAvgAge);
        return stats;
    }
};