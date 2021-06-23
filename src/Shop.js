import React, {useState , useEffect} from 'react';

function Shop(props) {
    useEffect (() => {
            fetchItems()
    },[]);
    
    const [items,setItems] = useState([]);
    
    
    
    const fetchItems = async ()=>{ 
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);};
        setItems(items)
        

    return (
        <div>
            <h1>Shop Page</h1>
        </div>
    );
}

export default Shop;