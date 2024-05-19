1. Create an Author class and a Book class.


class Author {
    constructor(name, email, gender) {
        this._name = name
        this._email = email
        this._gender = gender
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value
    }

    get gender() {
        return this._gender
    }

    set gender(value) {
        this._gender = value
    }

    toString() {
        return `Author[name=${this._name}, email=${this._email}, gender=${this._gender}]`
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this._title = title
        this._author = author
        this._price = price
        this._quantity = quantity
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    get author() {
        return this._author
    }

    set author(value) {
        this._author = value
    }

    get price() {
        return this._price
    }

    set price(value) {
        this._price = value
    }

    get quantity() {
        return this._quantity
    }

    set quantity(value) {
        this._quantity = value
    }

    getProfit() {
        return this._price * this._quantity
    }

    toString() {
        return `Book[title=${this._title}, author=${this._author.toString()}, price=${this._price}, quantity=${this._quantity}]`
    }
}


let author = new Author('J.K. Rowling', 'jk.rowling@example.com', 'female');
console.log(author.toString())

let book = new Book('Harry Potter', author, 20, 500)
console.log(book.toString())
console.log('Profit:', book.getProfit())




2. Create an Account class. Account should have: id, name, balance.


class Account {
    constructor(id, name, balance) {
        this._id = id
        this._name = name
        this._balance = balance
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get balance() {
        return this._balance
    }

    set balance(value) {
        this._balance = value
    }

    credit(amount) {
        this._balance += amount
        return this._balance
    }

    debit(amount) {
        if (amount <= this._balance) {
            this._balance -= amount
            return this._balance
        } else {
            console.log('Amount exceeded balance.')
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount <= this._balance) {
            this._balance -= amount
            anotherAccount.balance += amount
            return this._balance
        } else {
            console.log('Amount exceeded balance.')
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst.id === accountSecond.id &&
               accountFirst.name === accountSecond.name &&
               accountFirst.balance === accountSecond.balance
    }

    toString() {
        return `Account[id=${this._id}, name=${this._name}, balance=${this._balance}]`
    }
}




3. Write classes: Person, Student, Staff.


class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName
        this._lastName = lastName
        this._gender = gender
        this._age = age
    }

    get firstName() {
        return this._firstName
    }

    set firstName(value) {
        this._firstName = value
    }

    get lastName() {
        return this._lastName
    }

    set lastName(value) {
        this._lastName = value
    }

    get gender() {
        return this._gender
    }

    set gender(value) {
        this._gender = value
    }

    get age() {
        return this._age
    }

    set age(value) {
        this._age = value
    }

    toString() {
        return `Person[firstName=${this._firstName}, lastName=${this._lastName}, gender=${this._gender}, age=${this._age}]`
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age)
        this._program = program
        this._year = year
        this._fee = fee
        this._grades = {}
    }

    get program() {
        return this._program
    }

    set program(value) {
        this._program = value
    }

    get year() {
        return this._year
    }

    set year(value) {
        this._year = value
    }

    get fee() {
        return this._fee
    }

    set fee(value) {
        this._fee = value
    }

    passExam(program, grade) {
        this._grades[program] = grade
        if (this._program.every(prog => this._grades[prog] >= 50)) {
            this._year += 1
        }
    }

    toString() {
        return `Student[${super.toString()}, program=${this._program}, year=${this._year}, fee=${this._fee}]`
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age)
        this._program = program
        this._pay = pay
    }

    get program() {
        return this._program
    }

    set program(value) {
        this._program = value
    }

    get pay() {
        return this._pay
    }

    set pay(value) {
        this._pay = value
    }

    toString() {
        return `Teacher[${super.toString()}, program=${this._program}, pay=${this._pay}]`
    }
}


