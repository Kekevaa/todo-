const emptyOrRows = (result) => {
    if (!result || !Array.isArray(result.rows)) {
        return [] 
    }
    return result.rows
}

export { emptyOrRows }