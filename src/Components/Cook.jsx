import PropTypes from "prop-types";

const Cook = ({ cook , handlePrepare, count, handleRemoveCard}) => {
  const { recipe_name, preparing_time, calories } = cook;
  return (
    <tr className=" bg-[#F9F9F9] py-4 rounded-2xl">
        <td>{count}</td>
      <td className="py-4">{recipe_name}</td>
      <td className="py-4">{preparing_time}</td>
      <td className="py-4">{calories}</td>
      <td className="py-4"><button onClick={() => {handlePrepare(cook);handleRemoveCard(cook);}} className="bg-[#0BE58A] btn text-black rounded-full ">Preparing</button></td>
    </tr>

  );
};

Cook.propTypes = {
  cook: PropTypes.object,
  length: PropTypes.number,
  handlePrepare: PropTypes.func,
  handleRemoveCard: PropTypes.func,
  count: PropTypes.number
  
};

export default Cook;
