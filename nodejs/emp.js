const employees = [
    {
        id:1,
        name:"raj",
        department:"it",
        salary:45000
    },
    {
        id:2,
        name:"rahul",
        department:"hr",
        salary:4500
    },
    {
        id:3,
        name:"virat",
        department:"it",
        salary:95000
    }
];

const getallemp = ()=>{
    return employees;
}

//singel view
const allempid =(id)=>{
    return employees.find(x=>{
        return x.id === id;
    });
}

//department view
const allempdept = (department)=>{
    return employees.filter(x=>{
        return x.department === department;
    })
}

//highest salary
const allempsal = (salary)=>{
    return employees.filter(x=>{
        return x.salary > salary;
    });
}


module.exports = {getallemp,allempid,allempdept,allempsal}