import { getShoppingCart} from './FackData'

export const dataLoader = async()=>{
const loadedProduct = await fetch('products.json');
const products = await loadedProduct.json();

const storedCart =  getShoppingCart();
// console.log(storedCart);
const savedCart = []

for(const id in storedCart){
    const addProduct = products.find(pd =>pd.id === id);
    if(addProduct){
        const quantity = storedCart[id];
        addProduct.quantity = quantity;
        savedCart.push(addProduct);

    }
}
return savedCart
}

