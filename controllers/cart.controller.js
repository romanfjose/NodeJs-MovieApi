const cartContent = [];

export const getCart = (req, res) =>{
    res.send(cartContent);
}

export const addToCart = (req, res) =>{
    const itemToAdd = req.body;
    
    cartContent.push(itemToAdd);

    res.send(cartContent);
}