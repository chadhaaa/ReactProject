import axios from 'axios'

//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

export const getPrograms = async () => {
	try {
		return await axios.get('http://localhost:8000/api/programs')
	} catch (e) {
		console.log(e)
		return 'error in request programs all'
	}
}
