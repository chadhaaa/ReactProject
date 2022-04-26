import React , {useState,useEffect} from 'react';
import {toast} from 'react-toastify';
import { useParams,useNavigate } from 'react-router-dom';
import{ getPriceByPlanName} from '../services/checkout';
import {CardForm} from './Checkout/CardForm';

const convertCentToDollar = (cent) => {
    return cent/100;
};
export default function Checkout(){
    const [price,setPrice] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const params = useParams();
    const plan = params.plan;
    console.log(plan);
    useEffect(async ()=>{
        if (isLoading){
            const res = await getPriceByPlanName(plan);
            const price = await res.data.price;
            setPrice(price);
            console.log(price);
            setIsLoading(false);
        }
    },[]);
    return (
        <div>
            <h2>Paying for plan : {plan}</h2>
            { isLoading ? <div>loading ... </div> : <h2>Price : {convertCentToDollar(price)}</h2> }
            <CardForm price={price} plan={plan} />
        </div>
    );

}