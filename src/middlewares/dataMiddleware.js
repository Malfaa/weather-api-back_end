import { getDataFromApi } from "../services/apiServices.js";

export const weatherMiddleware = async (req, res, next) => {
    // const {city} = req.query; //Cidade recebida como query na URL,
    // //exemplo: /api/weather?city=São%20Paulo

    // if(!city){
    //     return res.status(400).json({message: "Cidade não fornecida!"});
    // }

    try{
        //Chama serviço para obter dados da API
        const data = await getDataFromApi(city);

        //Manipulação dos dados (por exemplo, extrair apenas a temperatura)
        const dadosProcessados = {
            city: data.city,
            temperatura: data.main.temp, //está em F°
            descricao: data.weather[0].description
        }

        //Armezenar os dados processados no objeto "req"
        req.data = dadosProcessados;
        
        next(); //Passa o controle para o próximo middleware ou rota

    }catch(error){
        console.error("Erro ao processar dados: " + error);
        res.status(500).json({message: "Erro ao obter dados meteorológicos"});
    }
}