module.exports = {


  friendlyName: 'Count',


  description: 'Count something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const result = await Unicorns.count();

    return { total: result };

  }


};
