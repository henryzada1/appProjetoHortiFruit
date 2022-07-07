import Api from "./Api";

export async function pesquisarNomeFruta(nomeFruta){ 
    try{
        const resultado = await Api.get(`/hortifruit?fruta=${nomeFruta}`);
        return resultado.data 
    }catch (error){
        console.log(error);
        return{};
    }
}


export async function salvarNovaFruta(id,fruta,valor,foto){
    try{
        await Api.post(`/hortifruit`,{
        id: idp,
        fruta: frutap,
        valor: valorp,
        foto: fotop,
        })

    }catch (error) {
        console.log();
        return[];
    }
}

export async function alterarFrutas(idp,frutap,valorp,fotop){
    try{
        await Api.put(`/hortifruit/${idp}`,
        {
            id: idp,
            fruta: frutap,
            valor: valorp,
            foto: fotop,
        });
        return 'Sucesso';
    }catch (error){
        console.log();
        return[]
    }
}

export async function deletarFrutas(){
    try{
        await Api.delete(`/hortifruit`)
    }catch (error){

    }
}