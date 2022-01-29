const notFoundMiddleware = (req,res) => res.status(404).send('Doesn"t Exist')

export default notFoundMiddleware