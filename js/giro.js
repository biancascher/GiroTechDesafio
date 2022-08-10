function gerarMontante(investido, tempo, taxa) {
    return (investido * Math.pow((1 + taxa), tempo));
}

function gerarTaxaJuros(montante, investido){
    return (((montante - investido)/investido) * 100);
}

function gerarValores(){
    const inInvestido = document.getElementById("in-investido");
    const inTempo = document.getElementById("in-tempo");
    const inTaxa = document.getElementById("in-taxa");
    const outMontante = document.getElementById("out-montante");
    const outJuros = document.getElementById("out-juros")

    const investido = Number(inInvestido.value.replace(",","."));
    const tempo = Number(inTempo.value.replace(",","."));
    const taxa = Number(inTaxa.value.replace(",","."));

    if(isNaN(investido) || isNaN(tempo) || isNaN(taxa)){
        alert("Informe os dados corretamente");
        inInvestido.focus();
        return;
    }

    const montante = gerarMontante(investido, tempo, taxa/100);

    outMontante.textContent = `Valor final após ${tempo} meses aplicados R$: ${montante.toFixed(2)}`; 
    outJuros.textContent = `Taxa de Juros no Valor Final: ${gerarTaxaJuros(montante, investido).toFixed(2)}%`;
}

const btnGerar = document.getElementById("btn-gerar");
btnGerar.addEventListener("click", gerarValores);
document.getElementById("in-taxa").addEventListener("keypress", (e => {
    if (e.code === "Enter") {
        gerarValores();
    }
}));

