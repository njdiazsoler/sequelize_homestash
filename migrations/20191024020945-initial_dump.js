const fs = require('fs');
const path = require('path');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const dumpFile = fs.readFileSync(path.resolve(__dirname, '../schema/initial_dump.sql'), 'utf8');
    // divide the dump script into queries
    const sqlQueries = dumpFile.split(';\n');

    // create the first (and dummy) Promise
    let executingPromise = new Promise((resolve, reject) => {
      resolve();
    });
    // now iterate promises sequentially
    sqlQueries.forEach((query) => {
      query = query.trim();
      if (query.length !== 0) {
        executingPromise = executingPromise.then(() => {
          console.log(`Executing: ${query.substring(0, 100)}`);
          return queryInterface.sequelize.query(query, {
            raw: true,
          });
        });
      }
      // .catch((err) => {});
    });
    return executingPromise;
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
