process.env.NODE_ENV = 'test'; // changing it so the DB is created in a different instance.

const {
    expect,
} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);


describe('Farmer API', () => {
    describe('POST - FARMERS', () => {
        it('Should return error creating farmer', () => {
            chai.request(server).post('/api/farmers').send("").end(
                ((err, res) => {
                    expect(res.status).to.equal(500);
                    expect(res.body).to.be.a('object');
                }),
            );
        });
        it('Should create a farmer successfuly', () => {
            let f = {
                address: {
                    street: 'IDK street',
                    state: 'Para',
                    address: 'Apt 501',
                    country: 'BR',
                },
                document: {
                    documentNumber: '821.101.500-00',
                    documentType: 'F'
                },
                name: 'Alex Dev'
            }
            chai.request(server).post('/api/farmers').send(f).end(
                ((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.name).to.equal('Alex Dev');
                })
            )
        })
    })


    describe('GET - FARMERS', () => {
        it('Should list all farmers', () => {
            chai.request(server).get('/api/farmers').query({
                search: ''
            }).end(
                ((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.gt(0);
                })
            );
        });

        it('Should return error without search param', () => {
            chai.request(server).get('/api/farmers').end(
                ((err, res) => {
                    expect(res.status).to.equal(500);
                    expect(res.body).to.be.a('object');
                })
            );
        });

        it('Should search by document number', () => {
            chai.request(server).get('/api/farmers').query({
                search: '1'
            }).end(
                ((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.gt(0);
                })
            );
        });

        it('Should search by name', () => {
            chai.request(server).get('/api/farmers').query({
                search: 'ale'
            }).end(
                ((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.gt(0);
                })
            );
        });
    });


});