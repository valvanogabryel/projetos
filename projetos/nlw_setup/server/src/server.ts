import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

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

app.get('/hello', async () => {
    const habits = await prisma.Habit.findMany({
        where: {
            title: {
                startsWith: 'correr'
            }
        }
    })
    return habits;
})

app.listen({
    port: 3333
}).then(() => {
    console.log('Server is running!');
})