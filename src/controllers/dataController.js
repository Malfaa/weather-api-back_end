export const getWeather = (req, res) => {
    //Aqui, estamos retornando os dados processados que foram armazenados no middleware
    res.status(200).json({
        message: "Dados obtidos com sucesso",
        data: res.data
    });
};