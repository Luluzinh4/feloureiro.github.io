client = require ('./conexao');

function pesqAlimento(string){
    client.connect();
    client.query('SELECT * from nutrientes WHERE descricao LIKE %?%', [string], (err, res) => {
        if (err) throw err;

        for(let row in res.rows)
            console.log(row)
        return res.rows;
    }); 
}

module.exports = pesqAlimento();