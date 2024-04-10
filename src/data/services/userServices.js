const db = require("../../database/models");
const usersService = {

  getAll: async function () {
    try {
      return await db.Users.findAll();
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getOne: async function (id) {
    try {
      return await db.Users.findByPk(id);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }
};
 module.exports = usersService;




 