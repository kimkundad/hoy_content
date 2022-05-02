'use strict';

const Hapi = require('@hapi/hapi');
const request = require('request')
const cheerio = require('cheerio')
const https = require('https');
const crypto = require("crypto");

var n = crypto.randomInt(0, 1000000);

const URL = 'https://cat888.vip/?v'+n

const init = async () => {

    const server = Hapi.server({
        port: 8088,
        host: '127.0.0.1'
    });

    server.route([
        {

        method: 'GET',
        path: '/gov_thai',
        handler: async function (req, h) {

            let url = `${URL}`
            
            return new Promise((resolve, reject) => {
            request(url, (err, response, body) => {
                
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
    {
        method: 'GET',
        path: '/hanoy',
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
                        ThreeTop: list2[9],
                        TwoUnder: list2[11]
                    }
                    return resolve(user);
                    
                }
            })
        })
        }
    },
    {
        method: 'GET',
        path: '/hanoySP',
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
                        ThreeTop: list2[25],
                        TwoUnder: list2[27]
                    }
                    return resolve(user);
                    
                }
            })
        })
        }
    },
    {
        method: 'GET',
        path: '/lao',
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
                        ThreeTop: list2[13],
                        TwoUnder: list2[15]
                    }
                    return resolve(user);
                    
                }
            })
        })
        }
    },
    {
        method: 'GET',
        path: '/stock_nikkeiday',
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
                        ThreeTop: list2[36],
                        TwoUnder: list2[37]
                    }
                    return resolve(user);
                    
                }
            })
        })
        }
    },
    {
        method: 'GET',
        path: '/stock_nikkeinoon',
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
                        ThreeTop: list2[38],
                        TwoUnder: list2[39]
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