import PropTypes from 'prop-types'

const CurrentCook = ({p,count}) => {
    const {recipe_name, preparing_time, calories} = p;
    return (
       <tr className="text-center bg-[#F9F9F9] py-4 rounded-2xl">
        <td>{count}</td>
        <td className='py-4'>{recipe_name}</td>
        <td className='py-4'>{preparing_time}</td>
        <td className='py-4'>{calories}</td>
       </tr>
    );
};

CurrentCook.propTypes = {
    p: PropTypes.object,
    count: PropTypes.number
}

export default CurrentCook;