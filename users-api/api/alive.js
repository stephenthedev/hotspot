<<<<<<< HEAD
// \api\alive.js
// Exports an express req/res callback function
module.exports = function() {
=======
// api/alive.js
module.exports = function() {
  
>>>>>>> a5d4a148386296b93963dbe96a899075d7fef326
  // Returns an express req/res callback function
  return function(req, res) {
    res.send('Johnny Five is Alive!');
  }
}
