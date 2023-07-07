type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}
type ReturnConexao = {
    driver: string,
    url: string
}

const conexao = (dados: Conn):Readonly<ReturnConexao>=> {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}

const conexaoDatabase = conexao({
    host:"",
    port:"", 
    username:"", 
    password:"", 
    dbname:""
});
