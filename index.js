// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: {
        line1: "22 Broad Street",
        line2: "Apt B",
        city: "Baskerville",
        state: "New York",
        zip: "10007",
    },
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};

    delete newEmployee[key];
    
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}