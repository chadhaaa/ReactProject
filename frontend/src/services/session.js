import axios from 'axios';

export const getSessions = async (id) => {
	try {
		return await axios.get('http://localhost:8000/api/sessions/player/'+id);
	} catch (e) {
		return 'error in request sessions all';
	}
};
export const getSessionsByPlayerId = async (id) => {
	try {
		return await axios.get('http://localhost:8000/api/sessions/player/'+id);
	} catch (e) {
		return 'error in request sessions by player id';
	}
};

export const getSessionsById = async (id) => {
	try {
		return await axios.get('http://localhost:8000/api/sessions/'+id);
	} catch (e) {
		return 'error in request sessions by id';
	}
};