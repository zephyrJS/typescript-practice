abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    printName(): void {
        console.log('AccountingDepartment name: ' + this.name);
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let class1 = new AccountingDepartment()