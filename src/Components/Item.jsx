import PropTypes from "prop-types";
import time from '../images/time.png';
import cal from '../images/cal .png'

const Item = ({ item }) => {
  console.log(item);
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;
  return (
    <div className="p-6 border-2 rounded-xl space-y-3">
      <div className="">
        <img className="w-full h-64 rounded-2xl" src={recipe_image} alt="" />
      </div>
      <h2 className="text-xl font-semibold">{recipe_name}</h2>
      <p className="border-b-2 pb-3">{short_description}</p>
      <p className="text-lg font-medium">Ingredients: {ingredients.length}</p>
      <ul className="list-disc list-inside border-b-2 pb-3">
        {ingredients.slice(0, 3).map((i, ind) => {
          return <li key={ind}>{i}</li>;
        })}
      </ul>
      <div className="flex justify-between">
        <div className="flex gap-2">
            <img src={time} alt="" />
            <p>{preparing_time}</p>
        </div>
        <div className="flex gap-2">
            <img src={cal} alt="" />
            <p>{calories}</p>
        </div>
      </div>
      <button className="btn rounded-full text-lg bg-[#0BE58A] font-medium">Want To Cook</button>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
