const products =[
    {title:'chou',id:1},
    {title:'Ail',id:2},
    {title:'pomme',id:3},
]

export default function Products(){

    const listeItems= products.map(product=>
        <li key={product.id}>{product.title}</li>
    );
    return(
        <ul>{listeItems}</ul>
    );
}