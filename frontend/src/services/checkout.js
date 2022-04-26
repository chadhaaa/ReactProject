import axios from 'axios';
export const getPriceByPlanName = async (plan) => {
    console.log(plan);
    try{
		return await axios.get(`http://localhost:8000/api/price/${plan}`);
	}catch(e){
		return 'error getting plan price ';
	}
};