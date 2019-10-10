exports.up = knex =>
    knex.schema.hasTable('programme').then(exists => {
        if (!exists) {
            return knex.schema.createTable('programme', table => {
                table.increments('id').primary().unsigned();
                table.integer('department_id').references('department.id');
                table.string('code').nullable();
                table.string('name').notNullable();
                table.integer('years').notNullable();
                table.string('prefix').notNullable();
                table.text('description').nullable();
            }).createTable('level', table => {
                table.increments('id').primary().unsigned();
                table.string('name').notNullable();
            });
        }
        return true;
    });

exports.down = knex => knex.schema.dropTable('programme');
