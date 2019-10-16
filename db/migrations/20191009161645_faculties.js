exports.up = knex =>
    knex.schema.hasTable('faculty').then(exists => {
        if (!exists) {
            return knex.schema.createTable('faculty', table => {
                table.increments('id').primary().unsigned();
                table.integer('institution_id').references('institution.id');
                table.string('code').nullable();
                table.string('name').notNullable();
                table.string('email').unique().nullable();
                table.string('phone').nullable();
                table.text('description').nullable();
                table.timestamps(false, true);
            });
        }
        return true;
    });

exports.down = knex => knex.schema.dropTable('faculty');
