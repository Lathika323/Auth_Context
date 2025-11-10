import { useCart } from "../contexts/CartContext";

const PRODUCTS = [
    {id:1, name:"Laptop"},
    {id:2, name:"Mouse"},
    {id:3, name:"USB C Type"},
    {id:4, name:"Notebook"},
];

export default function Products(){
    const {addCart} = useCart();

    return (
        <div>
            <h3>Products</h3>
            {PRODUCTS.map((p)=> (    //when retrieving/calling multiple array values , use map function by its id
                <div key={p.id} style={{marginBottom:"8px"}}>
                    {p.name} {" "}
                    <button onClick={() => addCart(p)}>Add Cart</button>
                </div>
            ))
            }
        </div>
    );
}