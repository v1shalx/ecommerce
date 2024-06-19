// asyncWrapper.js
module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next))
    .then(() => {
      console.log('Async function executed successfully');
    })
    .catch((err) => {
      console.error('Async function error:', err);
      next(err); // Pass the error to the next middleware
    });
};
