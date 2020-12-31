export default function errorHandler({ error }, req, res, next) {
    
    const timestamp = new Date().toJSON();
    res.json({
        error: 'Something Went Wrong!',
        message: error.errorMessage || 'Bad Request',
        status: error.status || 400,
        timestamp,
    });
}
