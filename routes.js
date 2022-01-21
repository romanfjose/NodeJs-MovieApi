import { getTest } from "./controllers/test.controller.js"
import { addToCart, getCart, removeFromCart   } from "./controllers/cart.controller.js"

export const routes =  (app) => {


    //endPoint
    app.route('/api/test')
    .get(getTest)


    //endPoint
    app.route('/api/cart')
    .get(getCart)
    .post(addToCart)
    .delete(removeFromCart)
 

}
