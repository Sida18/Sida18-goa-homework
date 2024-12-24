// task one

let person ={
    FirstName: 'sandro',
    LastName: 'sidamonidze',
    age: 12,

    address: {
       street: 'delisi',
       city: 'tbilisi',
       country: 'Giorgia'
    }

}

person.age = 13
person.address.country = 'greec'

person.email = 'sandro.sida12345@gmail.com'

delete person.address.country
delete person.address


// task two


let numbers = [1,2,3,4,5,6]

numbers[6] = 7

delete numbers[0]

for(let i = 0;i<numbers.length;i++){
        if(i==4){
            console.log(numbers[3])
        }
}

let numbers1 = [2,4,6]


// task 3


let students = {
    name: 'sandro',
    sandroScore: 100,
     
}

students.student1 = 'gio'
students.student2 = 'lasha'
students.gioScore = 99
students.lashaScore = 98


if(students.sandroScore>students.lashaScore && students.gioScore ){
    console.log(students.name)
}

else if (students.lashaScore> students.sandroScore && students.gioscore){
    console.log(students.student2)
}

else if(students.gioScore > students.sandroScore && students.lashaScore){
    console.log(students.student2)
}

else{
    console.log('error')
} 

// task 4 

// ვერ ვხვდები რას გულისხმობს დავალება
