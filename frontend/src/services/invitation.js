import axios from 'axios';
export const getInvitationData = async (invitationToken) => {
    try{
        return  await axios.get(`http://localhost:8000/api/invitation/accept/${invitationToken}`);
    }catch(e){
        return {error: e.message};
    }
};