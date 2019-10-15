
exports.up = knex =>
knex.schema.hasTable('course_test').then(exists => {
    if (!exists) {
        return knex.schema.createTable('course_test', table => {
            table.increments('id').primary().unsigned();
            table.integer('course_id').references('course.id');
            table.string('title').notNullable();
            table.string('instructions').nullable();
            table.integer('duration_mins').nullable();
            table.datetime('deadline').nullable();
            table.integer('max_tries').nullable();
            //table.integer('created_by_id').references('user.id');
            table.timestamps(false, true);
        }).createTable('course_question', table => {
            table.increments('id').primary().unsigned();
            table.integer('course_content_id').references('course_content.id');
            table.string('question').notNullable();
            table.string('media_src').nullable();
            table.enu('media_type', ['image', 'audio', 'video', 'infographic']).nullable();
            table.integer('marks').notNullable();
            //table.integer('created_by_id').references('user.id');
            table.timestamps(false, true);
        });
    }
    return true;
});

exports.down = knex => knex.schema.dropTable('course_question');
