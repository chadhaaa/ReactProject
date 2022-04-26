import axios from 'axios';

//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

export const getPrograms = async () => {
	try {
		return await axios.get('http://localhost:8000/api/programs');
	} catch (e) {
		return 'error in request programs all';
	}
};
export const getProgramById = async (id)=>{
	try{
		return await axios.get(`http://localhost:8000/api/program/${id}`);
	}catch(e){
		return 'error loading program with id : '+id;
	}
};

export const updateProgramById = async (id,data)=>{
	try{
		return await axios.put(`http://localhost:8000/api/program/${id}`,data);
	}catch(e){
		return 'error updating program with id : '+id;
	}
};

export const createProgram = async (data)=>{
	try{
		return await axios.post('http://localhost:8000/api/program',data);
	}catch(e){
		return 'error creating program';
	}
};

//delete programById
export const deleteProgramById = async (id)=>{
	try{
		return await axios.delete(`http://localhost:8000/api/program/${id}`);
	}catch(e){
		return 'error deleting program with id : '+id;
	}
};
