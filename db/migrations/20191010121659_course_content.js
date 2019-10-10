
exports.up = knex =>
    knex.schema.hasTable('course_content').then(exists => {
        if (!exists) {
            return knex.schema.createTable('course_content', table => {
                table.increments('id').primary().unsigned();
                table.integer('course_lesson_id').references('course_lesson.id');
                table.string('title').notNullable();
                table.enu('content_type').notNullable();
                table.integer('order').notNullable();
                table.text('text').nullable();
                table.string('src').nullable();
                //table.integer('created_by_id').references('user.id');
                table.timestamps(true, true);
            });
        }
        return true;
    });

exports.down = knex => knex.schema.dropTable('course_content');
