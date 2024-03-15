import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";


const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadItems = async() => {
            const res = await fetch('fake.json');
            const data = await res.json();
            setItems(data.recipes);
        }

        loadItems()
    }, [])
 
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Our Recipes</h2>
            <p className="w-4/6 mx-auto text-center">Food blogs with a unique niche angle tend to perform better on the SEO front because when people search for a recipe or cooking technique that they’re interested in, </p>
            <div className="grid grid-cols-2 gap-8 w-[800px] mt-12">
            {
                items.map(item => <Item 
                    item={item}
                    key={item.recipe_id}
                    ></Item>)
            }
            </div>

        </div>
    );
};

export default Items;