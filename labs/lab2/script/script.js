const students = [
    { name: "Alice", grades: [89, 79, 94, 90] },
    { name: "Pedro", grades: [77, 81, 89, null] },
    { name: "Jeff", grades: [73, null, 71, 85] },
    { name: "Laura", grades: [80, 91, 63, 78] },
    { name: "Sam", grades: [85, 87, 92, 88] },
    { name: "Maya", grades: [91, 85, 89, 90] },
    { name: "Jake", grades: [75, null, 80, 82] },
    { name: "Lily", grades: [88, 84, 90, 91] },
];

function calculateAverage(grades) {
    const validGrades = grades.filter((grade) => grade !== null);
    const sum = validGrades.reduce((a, b) => a + b, 0);
    return validGrades.length > 0 ? Math.round(sum / validGrades.length) : 0;
}


function determineLetterGrade(avg) {
    if (avg >= 90) return "A";
    if (avg >= 85) return "A-";
    if (avg >= 80) return "B+";
    if (avg >= 75) return "B";
    if (avg >= 70) return "B-";
    return "F";
}


const gradeBook = document.getElementById("grade-book");
students.forEach((student) => {
    const avg = calculateAverage(student.grades);
    const letterGrade = determineLetterGrade(avg);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td><a href="${student.name.toLowerCase()}.html">${student.name}</a></td>
        ${student.grades.map((grade) => `<td>${grade ?? "-"}</td>`).join("")}
        <td>${avg}</td>
        <td>${letterGrade}</td>
    `;
    gradeBook.appendChild(row);

    console.log(`Student: ${student.name}, Grades: ${student.grades}, Avg: ${avg}, Letter: ${letterGrade}`);
});

  
