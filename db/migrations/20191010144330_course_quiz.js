
exports.up = knex =>
knex.schema.hasTable('course_test').then(exists => {
    if (!exists) {
        return knex.schema.createTable('course_test', table => {
            table.increments('id').primary().unsigned();
            table.integer('course_content_id').references('course_content.id');
            table.string('question').notNullable();
            table.integer('marks').notNullable();
            //table.integer('created_by_id').references('user.id');
            table.timestamps(true, true);
        }).createTable('course_question', table => {
            table.increments('id').primary().unsigned();
            table.integer('course_content_id').references('course_content.id');
            table.string('question').notNullable();
            table.integer('marks').notNullable();
            //table.integer('created_by_id').references('user.id');
            table.timestamps(true, true);
        });
    }
    return true;
});

exports.down = knex => knex.schema.dropTable('course_question');
