const classA = [
    { name: "Wilson", grade: 10 },
    { name: "Pedro", grade: 7.5 },
    { name: "Douglas", grade: 9.0 },
    { name: "KK", grade: 10 }
]

const classB = [
    { name: "Wagner", grade: 1 },
    { name: "Poc", grade: 4.5 },
    { name: "Ddodo", grade: 3.0 },
    { name: "Min", grade: 1 }
]

function calculateAverage(students) {
    let sum = 0
    for (let x = 0; x < students.length; x++) {
        sum = sum + students[x].grade
    }
    const average = sum / students.length
    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}, congratulations`)
    } else {
        console.log(`${turma} average: ${average}, is not good!`)
    }
}

function markAsFlunked(student){
    student.reprovado = false
    if (student.grade < 5){
        student.reprovado = true
    }
}

function sendFlunkedMessage(student){
    if (student.reprovado){
        console.log(`${student.name} flunked!`)
    }
}

function failedStudent(students){
    for (let student of students){
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

// ATENÇÃO: array.lenght (Diz o tamanho da array).
// TRADUÇÕES: sum = soma / students = estudantes / class = turma / length = tamanho / average = media
// markAsFlunked = Marcar como reprovado / failedStudent = Estudante reprovado.

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, "Class A")
sendMessage(average2, "Class B")

failedStudent(classA)
failedStudent(classB)


//console.table(classA)
//console.table(classB)