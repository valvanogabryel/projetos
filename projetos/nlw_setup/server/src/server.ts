import fastify from "fastify";

const app = fastify();

/*
Método HTTP: { 
    Get: 'Buscar informações', 
    Put: 'Atualizar um recurso por completo', 
    Patch: 'Atualizar uma informação específica de um recurso',
    Post: 'Criar algo' 
    Delete: 'Deletar um recurso' 
}

Navegador somente suporta o Get.'
*/

app.get('/hello"', () => {
    return 'Hello, World!'
})



app.listen({
    port: 3333
}).then(() => {
    console.log('Server is running!');
})