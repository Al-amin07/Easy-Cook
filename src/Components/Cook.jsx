import PropTypes from "prop-types";

const Cook = ({ cook , handlePrepare}) => {
  const { recipe_name, preparing_time, calories } = cook;
  return (
    <tr className=" bg-[#F9F9F9] py-4 rounded-2xl">
        <td></td>
      <td className="py-4">{recipe_name}</td>
      <td className="py-4">{preparing_time}</td>
      <td className="py-4">{calories}</td>
      <td className="py-4"><button onClick={() => handlePrepare(cook)} className="bg-[#0BE58A] btn text-black rounded-full ">Preparing</button></td>
    </tr>

  );
};

Cook.propTypes = {
  cook: PropTypes.object,
  length: PropTypes.number,
  handlePrepare: PropTypes.func
  
};

export default Cook;
