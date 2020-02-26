const data = require('../../tools/unicorns');

module.exports = {


  friendlyName: 'Import',


  description: 'Import something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const unicorns = [...data];

    unicorns.forEach(
        u => {
            delete u.logo_url;
            delete u.permalink;
            delete u.tag_page;
            delete u.unicorn_bday;
            delete u.unicorn_exit;
            delete u.rumored;
            delete u.valuation_change;
            delete u.date_of_valuation;

            if (u.total_equity_funding === null) {
              u.total_equity_funding = 0;
            }

        }
    );

    const result = await Unicorns.createEach(unicorns);
    return result;

  }


};
