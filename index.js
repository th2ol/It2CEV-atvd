const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

//tempo de contribuição mínimo para homens é de 35 anos.
//tempo de contribuição mínimo para mulheres é de 30 anos.

if (sexo == "F") {
    if (contribuicao >= 30 && idade + contribuicao >= 85) {
        console.log(nome,", você pode se aposentar!")
    } else {
        console.log(nome,", você ainda não pode se aposentar!")
    }
}
else {

    if (contribuicao >= 35 && idade + contribuicao >= 95) {
        console.log(nome,", você pode se aposentar!")
    } else {
        console.log(nome,", você ainda não pode se aposentar!")
    }



    }

