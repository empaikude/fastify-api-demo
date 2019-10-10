exports.up = knex =>
    knex.schema.hasTable('department').then(exists => {
        if (!exists) {
            return knex.schema.createTable('department', table => {
                table.increments('id').primary().unsigned();
                table.integer('faculty_id').references('faculty.id');
                table.string('code').notNullable();
                table.string('name').notNullable();
                table.text('description').nullable();
            });
        }
        return true;
    });

exports.down = knex => knex.schema.dropTable('department');
