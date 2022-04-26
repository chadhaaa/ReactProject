import { useParams ,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProgramById,updateProgramById,createProgram } from '../../services/program';
import {toast,ToastContainer} from 'react-toastify';
export default function ProgramCreate({mode}){
    const {programId} = useParams();
    const [program,setProgram] = useState({});
    const [isLoading,setIsLoading] = useState(mode ===  'edit' ? true : false);
    const Navigate = useNavigate();
    useEffect(async ()=>{
        setProgram({
            title:'',
            link:'',
            description:'',
            picture:''
        });
        if (isLoading){
            const { data } = await getProgramById(programId);
            setProgram(data);
            setIsLoading(false);
        }
    },[]);


    const handleSubmit = async () =>{
        if (mode === 'edit'){
            const { data } = await updateProgramById(programId,program);
            toast.success(`program with  "${data.title}" is Edited `, { position:toast.POSITION.TOP_RIGHT });
        }else{
            const { data } = await createProgram(program);
            toast.success(`New program "${data.title}" is created `, { position: toast.POSITION.TOP_RIGHT});
        }
        Navigate('/program');
    };
    return (
        <div>
            {mode!=='edit' && <h1 className='text-3xl'>Program Create</h1>}
            {mode==='edit' && <h1 className='text-3xl'>Program Edit</h1>}
            {mode === 'edit'  && isLoading? (<h1>loading ...</h1>) : (

            
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={program?.title || ''}
                        onChange={(e)=>setProgram({...program,title:e.target.value})}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="link">
                        Link
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                        id="link"
                        type="text"
                        placeholder="Link"
                        value={program?.link || ''}
                        onChange={(e)=>setProgram({...program,link:e.target.value})}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        placeholder="Description"
                        value={program?.description || ''}
                        onChange={(e)=>setProgram({...program,description:e.target.value})}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="picture">
                        Picture
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                        id="picture"
                        type="text"
                        placeholder="Picture"
                        value={program?.picture || ''}
                        onChange={(e)=>setProgram({...program,picture:e.target.value})}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={()=>{
                           handleSubmit();
                        }
                        }
                    >   {mode==='edit'?'Edit':'Create'}
                    </button>
                </div>
                </form>
                )}
        </div>
    );
}
