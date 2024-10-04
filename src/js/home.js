function pesquisar() {
    let section = document.getElementById("resultado-busca")
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    let resultado = ""

    section.iunnerHTML = ""

    if (campoPesquisa === "") {
        section.classList.add("hidden"); //oculta a seção 
        return
    }

    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase())) {
            resultado += `
         <div class = "flex flex-row justify-start">
            <div class = "flex-col">
                <img src = "${dado.imagem}">
                <h2 class = "text-2x1 font-bold text-center">${dado.titulo}</h2>
            </div>

            <div class = "flex flex-col items-center justify-center text-center gap-5 ml-10">
                <p>${dado.descricao}</p>
                <p>${dado.jogadores}</p>
                <p>Desenvolvido pela <span class = "font-bold underline"><span><a href="${dado.link}" target ="blank">${dado.empresa}</a></span><p>
            </div>
         </div>
        
            `
        }
    }


    section.innerHTML = resultado

    if (resultado !== "") {
        section.classList.remove("hidden")
        section.classList.add("flex")
    } else {
        section.classList.add("hidden")
    }
}