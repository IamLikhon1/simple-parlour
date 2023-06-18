
const SingleServices = ({items}) => {
    const{id,title,img,price,des}=items
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure><img className="w-16 my-5  h-16  rounded-full" src={img} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title w-full">{title}</h2>
    <p className=" text-[#F63E7B] text-xl font-semibold">$ {price}</p>
    <p>{des}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-[#F73E7B] hover:bg-[#F73E7B] text-white  mt-5 ">Select</button>
    </div>
  </div>
</div>
      </div>
    );
};

export default SingleServices;