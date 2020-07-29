
exports.up = function(knex, Promise) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments(); // if no name between brackets it defaults to "id".
        //name, avgWeightOz, delicious, color
        tbl.text("vin").unique().notNullable();
        tbl.float("make").notNullable();
        tbl.float("model").notNullable();
        tbl.integer("mileage").notNullable();
        tbl.float("teansmission-type");
        tbl.float("title");
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('cars')  
  };
  