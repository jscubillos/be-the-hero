const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection.select().from('ongs');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(20).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection.delete().from('ongs').where('id', id);

        return response.status(204).send();
    }
    
}