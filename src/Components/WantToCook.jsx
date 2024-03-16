
import PropTypes from 'prop-types';
import Cook from './Cook';
import { useState } from 'react';
import CurrentCook from './CurrentCook';


const WantToCook = ({wantCooks}) => {

    const [prep, setPrep] = useState([]);
    const handlePrepare = (cook) =>{
        const newArray = [...prep, cook];
        setPrep(newArray)
    }

    return (
        <div  className="mt-12 w-[480px] border-2 p-2 rounded-2xl">
           <h2 className="w-5/6 mx-auto text-2xl font-semibold text-center pb-2 border-b-2 mb-5">Want to cook: {wantCooks.length}</h2> 
           <div className='space-y-4'>
           <table className="border-separate border-spacing-y-4 space-y-4 w-[96%] text-[#878787] mx-auto">
            <tr className="">
                <td className='w-1/12'></td>
                <td className=''>Name</td>
                <td className=''>Time</td>
                <td className=''>Calories</td>

              
            </tr>
            {
                wantCooks.map((cook, ind) => <Cook handlePrepare={handlePrepare}   key={ind} cook={cook}></Cook>)
            }
           </table>
           </div>

           <h2 className="w-5/6 mx-auto mt-12 text-2xl font-semibold text-center pb-2 border-b-2 mb-5">Currently cooking: {prep.length}</h2>
           
           <table className="border-separate border-spacing-y-4 mb-12 space-y-4 w-full text-[#878787] mx-auto">
            <tr className="text-center mb-12">
                
                <td className=''>Name</td>
                <td className=''>Time</td>
                <td className=''>Calories</td>

              
            </tr>
            {
                prep.map(p => <CurrentCook key={p.recipe_id} p={p}></CurrentCook>)
            }
           </table>
        </div>
    );
};

WantToCook.propTypes = {
    wantCooks: PropTypes.array,
    
}

export default WantToCook;