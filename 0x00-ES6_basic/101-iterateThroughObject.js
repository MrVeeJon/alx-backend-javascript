export default function iterateThroughObject(reportWithIterator) {
    let employeeNames = [];

    for (const departmentName in reportWithIterator.allEmployees) {
        const employees = reportWithIterator.allEmployees[departmentName];
        employeeNames.push(...employees);
    }

    return employeeNames.join('|');
}

export default iterateThroughObject;
