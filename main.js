async function executar() {
    if (await perguntar("É mamifero?")) {
        if (await perguntar("É quadrupede?")) {
            if (await perguntar("É carnivoro? ")) {
                resposta("É o LEÃO");
            } else if (await perguntar("É herbivoro?")) {
                resposta("É o CAVALO");
            } else (resposta(""))
        }
        else if (await perguntar("É bípede?")) {
            if (await perguntar("É onívoro?")) {
                resposta("É o HOMEM");
            } else if (await perguntar("É frutífero?")) {
                resposta("É o MACACO");
            } else (resposta(""))
        }
        else if (await perguntar("É voador?")) {
            resposta("É o MORCEGO");
        } 
        else if (await perguntar("É aquático?")) {
            resposta("É a BALEIA");
        } else (resposta(""))
    } else if (await perguntar("É ave?")) {
        if (await perguntar("Não voador?")) {
            if (await perguntar("É Tropical ?")) {
                resposta("Avestruz");
            } else if (await perguntar("É Polar?")) {
                resposta("É o PINGUIM");
            } else (resposta(""))
        }
        else if (await perguntar("É aquático")) {
            resposta("É o PATO");
        }
        else if (await perguntar("É de rapina?")) {
            resposta("É a ÁGUIA");
        } else (resposta(""))
    } else if (await perguntar("É réptil?")) {
        if (await perguntar("Tem casco?")) {
            resposta("É a TARTARUGA");
        } else if (await perguntar("É carnívoro")) {
            resposta("É o CROCODILO");
        } else (resposta(""))
    } else (resposta(""))
}


async function perguntar(texto) {
    const result = await Swal.fire({
        title: texto,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
    });
    return result.isConfirmed;
}

function resposta(texto) {
    if (texto !== "") {
        Swal.fire({
            title: texto,
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Animal não encontrado!",
            icon: "error"
        });
    }
}