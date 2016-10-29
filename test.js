//import chai module
var expect = require('chai').expect
//create some objects which we will be testing.
//Typically these objects will come from other modules (unit testing):
var name = 'React Quickly'
var url = ['http://reactquickly.co', 'https://www.manning.com/books/react-quickly']
// Next, we use describe with a string and function arguments to define the test suite. The first argument is a string of the object that we are testing. (object in a broad sense, it can be a module or a function). Typically it's a noun:


describe('name and url', function() {
  it('must match the values', function(done){
    expect(name).to.be.a('string')
    expect(name).to.equal('React Quickly')
    expect(url).to.have.length(2)
    expect(url).to.have.deep.property('[1]', 'https://www.manning.com/books/react-quickly')
      .with.length(43)
    done()
  })
})
