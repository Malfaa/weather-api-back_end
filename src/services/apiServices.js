//Criar serviço de integração Externa
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); //Carregar variáveis de ambiente

const API_URL = "https://api.openweathermap.org/data/2.5/weather"; //URL p/ requisição
const API_KEY = process.env.API_KEY_EXTERNA; //Chave de API

export const getDataFromApi = async (city) => {
    try {
        console.log("funcionou apiServices");
        const response = await axios.get(API_URL, {
            params: {
                q: city, //Nome cidade
                appid: API_KEY, //Chave de api
                units: 'metrics', //Para usar as medidas métricas (Celsius) 
                lang: 'pt_br' //Idioma português
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error ao chamar a API: " + error);
        throw new Error("Erro ao obter dados da API Externa");
    }
}