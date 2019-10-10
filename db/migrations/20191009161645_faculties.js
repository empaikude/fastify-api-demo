exports.up = knex =>
    knex.schema.hasTable('faculty').then(exists => {
        if (!exists) {
            return knex.schema.createTable('faculty', table => {
                table.increments('id').primary().unsigned();
                table.integer('institution_id').references('institution.id');
                table.string('code').notNullable();
                table.string('name').notNullable();
                table.text('description').nullable();
            });
        }
        return true;
    });

exports.down = knex => knex.schema.dropTable('faculty');
