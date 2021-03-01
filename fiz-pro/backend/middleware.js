const notFound = (req, res, next) => {
    const error = new Error(`not found ${req.originalUrl}`);
    res.status(404);
    next(error);
  };

  const errorHandlers = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.statusCode(statusCode);
    res.JSON({
      message : error.message,
      stack : process.env.NODE_ENV === 'production' ? '🥞' : error.stack 
    })
  };

  module.exports = {
      notFound,
      errorHandlers
  };