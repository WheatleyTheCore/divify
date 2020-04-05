const tokenize = (text) => {
    let tokenizedTitle = text.title.split(' ')
    let tokenizedBody = text.body.split(' ')
    
    let tokenizedText = {
        title: tokenizedTitle,
        body: tokenizedBody
    }

    return tokenizedText
}

export default tokenize