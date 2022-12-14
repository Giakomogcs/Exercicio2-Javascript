const Students = [
    {
      name: "Giovani",
      p1: 7,
      p2: 10,
    },

    {
      name: "Valdir",
      p1: 5,
      p2: 8,
    },

    {
      name: "Calixto",
      p1: 4,
      p2: 1,
    },

    {
      name: "Fabricio",
      p1: 10,
      p2: 9,
    },

    {
      name: "Bruno",
      p1: 2,
      p2: 6,
    },
]

function Media (student){
  med = (student.p1 + student.p2)/2
  return med
}


for(let student of Students){
  mediaStudy = Media(student)

  
  if (mediaStudy >= 7) {
    alert(`
    A média do(a) ${student.name} é: ${mediaStudy}
    Parabéns ${student.name}! Você foi aprovado(a) no concurso`)
  } 
  
  else {
    alert(`
    A média do(a) ${student.name} é: ${mediaStudy}
    Não foi dessa vez, ${student.name}! Tente novamente`)
  }
}