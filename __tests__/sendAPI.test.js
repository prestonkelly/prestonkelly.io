import fetch from 'isomorphic-unfetch'
import chai from 'chai';
const expect = chai.expect;


describe('/api/send', () => {
    it('returns a message with the specified response', async () => {

        fetch('http://localhost:3000/api/hello', {
            method: 'GET'
        }).then(response => response.json())
            .then(data => {
                expect(data.status).toBe(201);
                expect(data.body).toHaveProperty('post')
            })

    });
});