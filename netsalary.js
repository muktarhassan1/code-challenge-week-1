function calculateNetSalary() {
    
    let basicSalary = parseFloat(prompt("Enter your basic salary:"));
    let benefits = parseFloat(prompt("Enter your benefits:"));


    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        alert("Please enter valid positive numbers for basic salary and benefits.");
        return;
    }

    
    let grossSalary = basicSalary + benefits;

    
    let payee = 0;
    if (grossSalary > 20000) {
        payee = grossSalary * 0.10; 
    }

    
    let nhifDeduction = 0;
    if (grossSalary <= 10000) {
        nhifDeduction = 150; 
    } else if (grossSalary <= 20000) {
        nhifDeduction = 300;
    } else {
        nhifDeduction = 500; 
    }

    
    let nssfDeduction = basicSalary * 0.06;

    
    let totalDeductions = payee + nhifDeduction + nssfDeduction;
    let netSalary = grossSalary - totalDeductions;


    alert(`Gross Salary: Ksh ${grossSalary}`);
    alert(`PAYE (Tax): Ksh ${payee}`);
    alert(`NHIF Deductions: Ksh ${nhifDeduction}`);
    alert(`NSSF Deductions: Ksh ${nssfDeduction}`);
    alert(`Total Deductions: Ksh ${totalDeductions}`);
    alert(`Net Salary: Ksh ${netSalary}`);
}


calculateNetSalary();

