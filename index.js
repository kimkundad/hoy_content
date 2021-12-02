'use strict';

const Hapi = require('@hapi/hapi');
const request = require('request')
const cheerio = require('cheerio')
const https = require('https');

const URL = 'https://cat888.com/'

const init = async () => {

    const server = Hapi.server({
        port: 8088,
        host: 'localhost'
    });

    server.route([
        {

        method: 'GET',
        path: '/gov_thai',
        handler: async function (req, h) {

            let url = `${URL}`
            
            return new Promise((resolve, reject) => {
            request(url, (err, response, body) => {
                console.log('--', body)
                if (!err && response.statusCode === 200) {
            
                    var list = [];
                    var list2 = [];
                    let $ = cheerio.load(body)
                    $('div[class="table-num"]').find('div > span').each(function (index, element) {
                        list.push($(element).text().trim());
                      });
                      $('div[class="table-num"]').find('div > div > div > p').each(function (index, element) {
                        list2.push($(element).text().trim());
                      });

                      var FirstPrize =  (list[0]).slice(14)
                      
                    

                    const user = {
                        FirstPrize: FirstPrize,
                        ThreeFront: list2[1],
                        ThreeUnder: list2[2],
                        TwoUnder: list2[3],
                        all: list2
                    }
        
                    return resolve(user);
                    
                }
            })
        })

            
        }

    },
    {

        method: 'GET',
        path: '/baac_thai',
        handler: async function (req, h) {

            let url = `${URL}`
            
            return new Promise((resolve, reject) => {
            request(url, (err, response, body) => {
                console.log('--', response.statusCode)
                if (!err && response.statusCode === 200) {
        
                    var list2 = [];
                    let $ = cheerio.load(body)
                    
                      $('div[class="table-num"]').find('div > div > div > p').each(function (index, element) {
                        list2.push($(element).text().trim());
                      });
                    const user = {
                        ThreeTop: list2[6],
                        TwoUnder: list2[7]
                    }
                    return resolve(user);
                    
                }
            })
        })

            
        }

    },
    {

        method: 'GET',
        path: '/gsb_thai',
        handler: async function (req, h) {

            let url = `${URL}`
            
            return new Promise((resolve, reject) => {
            request(url, (err, response, body) => {
                console.log('--', response.statusCode)
                if (!err && response.statusCode === 200) {
        
                    var list2 = [];
                    let $ = cheerio.load(body)
                    
                      $('div[class="table-num"]').find('div > div > div > p').each(function (index, element) {
                        list2.push($(element).text().trim());
                      });
                    const user = {
                        ThreeTop: list2[4],
                        TwoUnder: list2[5]
                    }
                    return resolve(user);
                    
                }
            })
        })

            
        }

    },
]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();