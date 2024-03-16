import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";
import WantToCook from "./WantToCook";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Items = () => {
  const [items, setItems] = useState([]);

  const [wantCooks, setWantCook] = useState([]);
  
  

  const handleRemoveCard = (item) => {
     const newArray = wantCooks.filter(cooks => cooks.recipe_id !== item.recipe_id);
    setWantCook(newArray);
    console.log(wantCooks)
    
  }

  const handleWantCook = (item) => {
  
    const exits = wantCooks.find(cook => cook.recipe_id === item.recipe_id);
    
    if(exits){
        toast("Already Exits")
    }
    else{
        const newArray = [...wantCooks, item];
        setWantCook(newArray);
    }

  };

  useEffect(() => {
    const loadItems = async () => {
      const res = await fetch("fake.json");
      const data = await res.json();
      setItems(data.recipes);
    };

    loadItems();
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Our Recipes</h2>
      <p className="w-4/6 mx-auto text-center">
        Food blogs with a unique niche angle tend to perform better on the SEO
        front because when people search for a recipe or cooking technique that
        they’re interested in,{" "}
      </p>
      <div className="flex gap-3">
        {/* Card */}
        <div className="grid grid-cols-2 gap-8 w-[800px] mt-12">
          {items.map((item) => (
            <Item
              item={item}
              handleWantCook={handleWantCook}
              key={item.recipe_id}
            ></Item>
          ))}
        </div>
        {/* Want To Cook */}
        <div>
          <WantToCook 
          handleRemoveCard={handleRemoveCard}
          wantCooks={wantCooks}></WantToCook>
        </div>
      </div>
      <ToastContainer />
    </div>

  );
};

export default Items;
