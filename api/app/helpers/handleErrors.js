const httpError = (response, error) => {
    console.log(error)
    response.status(500)
    response.send({ error: 'Something happened' })
}

export { httpError }