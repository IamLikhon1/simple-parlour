import {  FaStar } from 'react-icons/fa';
const SingleTesti = ({single}) => {
    const{img,name,post,des}=single
    return (
        <div>
            <div className="card w-96 p-5 mx-5 bg-base-100 shadow-xl">
 <div className="flex">
 <figure><img src={img} className="w-32 h-32 rounded-full" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p >{post}</p>
 </div>
  </div>
    <p className="my-10">{des}</p>
    <div className='flex text-yellow-400 text-xl'>
        <FaStar className='mx-1'></FaStar>
        <FaStar className='mx-1'></FaStar>
        <FaStar className='mx-1'></FaStar>
        <FaStar className='mx-1'></FaStar>
        <FaStar className='mx-1'></FaStar>
    </div>
</div>
            
        </div>
    );
};

export default SingleTesti;