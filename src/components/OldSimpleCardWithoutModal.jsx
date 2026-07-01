import { useState } from 'react';


const ToursCard = ({id,name,info,image,price,removeTour}) => {
    const[readmore,setReadmore] = useState(false);
    const description = readmore ? `${info} `:`${info.substring(0,160)}`;
    function readMoreHandler(){
        setReadmore(!readmore)
        
    }


    // -------------its represent single card div-------------

  return (
    <div className='w-80 h-max m-4 p-4 rounded-xl shadow-xl flex flex-col justify-center items-center hover:scale-105 duration-300'>

        <img src={image} alt={name} className='w-72 aspect-square object-cover'/>
        <div className='my-5 mx-1.5'>
            <div>
                <h4 className='text-green-500 text-xl font-bold'>{price}</h4>
                <h4 className='text-2xl font-medium mt-0.5'>{name}</h4>
            </div>
            <div className='text-gray-600 text-lg mt-2'>
                {description}
                <span 
                    className='text-blue-700 font-medium cursor-pointer text-lg hover:underline mt-1'
                    onClick={readMoreHandler}> 
                    {`${readmore ? 'Show Less' : ' Read More....'}`}
                </span>
            </div>
      </div>
      <div>
        <button 
            className='bg-red-200 text-black rounded-lg hover:bg-red-500 duration-300 cursor-pointer px-10 py-1.5 border font-medium text-lg'
            onClick={()=>removeTour(id)}>Not Intrested</button>
      </div>
    </div>
  )
}

export default ToursCard;
