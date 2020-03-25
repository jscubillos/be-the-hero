const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        
        const [count] = await connection.select().from('incidents').count('id', { as: 'total'});
        const incidents = await connection('incidents')
                                    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                                    .limit(5)
                                    .offset((page - 1) * 5)
                                    .select([
                                        'incidents.*',
                                        'ongs.name',
                                        'ongs.email',
                                        'ongs.whatsapp',
                                        'ongs.uf'
                                    ]);
        
        response.header('X-Total-Count', count.total);
        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
                                .where('id', id)
                                .select('ong_id')
                                .first();


        if (!incident) {
            return response.status(404).json({ error: 'Incident not found.' });
        }

         if(incident.ong_id !== ong_id) {
             return response.status(204).json({ error: 'Delete not authorized.'});
         }

        await connection.delete().from('incidents').where('id', id);
        
        return response.status(204).send();
    }
}