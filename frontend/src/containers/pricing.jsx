
import { useNavigate } from 'react-router-dom';
const PLANS = [
    {
        title: 'free',
        price: 0,
        features: [
            '3 users included',
        ]
    },
    {
        title:'basic',
        price: 49,
        features: [
            '10 users included'
        ]
    },
    {
        title:'premium',
        price: 99,
        features: [
            'unlimited'
        ]
    }
];
export default function Pricing(){
    
    return (
        <div className="flex flex-col">
            <div className="text-3xl text-center my-10"> Pricing </div>
            <div className="flex justify-around">
                {PLANS.map(plan=>(
                <PricingCard key={plan.title} plan={plan} />
                ))}
            </div>
        </div>
    );
}

const PricingCard = ({plan})=>{
    const navigate = useNavigate();
    const {title,price,features} = plan;
    console.log(plan);
    let planBtnStyle = (title=='free') ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700';
    let textPlanStyle = (title=='free') ? 'text-green-500 dark:text-green-400' : 'text-blue-500 dark:text-blue-400';
    let featureStyle = (title=='free')? 'text-green-600 dark:text-green-500' : 'text-blue-600 dark:text-blue-500';
    planBtnStyle = (title=='premium') ? 'bg-yellow-600 hover:bg-yellow-700' : planBtnStyle;
    textPlanStyle = (title=='premium') ? 'text-yellow-500 dark:text-yellow-400' : textPlanStyle;
    featureStyle = (title=='premium') ? 'text-yellow-600 dark:text-yellow-500' : featureStyle;
    return (
        <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className={'mb-4 text-xl font-medium '+textPlanStyle}>{title.toUpperCase()} Plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/Year</span>
                    </div>

                    <ul role="list" className="my-7 space-y-5">
                        <li className="flex space-x-3 w-[300px] h-[200px]">
                            <svg className={'flex-shrink-0 w-5 h-5 ' +featureStyle} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className={'text-base font-normal leading-tight text-gray-500 dark:text-gray-400'}>{features[0]}</span>
                        </li>
                        
                        {/*<li className="flex space-x-3 line-through decoration-gray-500">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
                        </li>
                        */}
                    </ul>
                    <button type="button"  className={`${planBtnStyle} text-white  focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center `} onClick = {()=>{navigate(`/checkout/${title}`);}}>Choose plan</button>
                </div>
    );
};