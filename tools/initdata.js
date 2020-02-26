const axios = require('axios');
const data = require('./unicorns');


console.log(data.length);

// const url = 'http://localhost:1337/unicorns';


// (async () => {

//     const unicorns = [...data];

//     unicorns.forEach(
//         u => {
//             delete u.logo_url;
//             delete u.permalink;
//             delete u.tag_page;
//             delete u.unicorn_bday;
//             delete u.unicorn_exit;
//             delete u.rumored;
//             delete u.valuation_change;
//             delete u.date_of_valuation;

//         }
//     );

//     for (let i = 0; i < unicorns.length; i++) {
//         const jsonData = JSON.stringify(unicorns[i]);

//         const response = await axios(
//             {
//                 method: 'post',
//                 url,
//                 data: jsonData,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }

//             }
//         );
//         console.log(response);
//     }

// })().catch(
//     err => { err => console.log(err) }
// );
