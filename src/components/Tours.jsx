import ToursCard from './ToursCard'

const Tours = ({tours,removeTour}) => {
    
  return (
    <div>
        <div className="text-center py-10">
            <h2 className="inline-block text-5xl md:text-6xl font-extrabold text-slate-800 px-12 py-5 rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl border border-white/40 select-none">
                ✈️ Plan Your Tour With Love ❤️
            </h2>
            <div className="w-200 h-1.5 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-5"></div>
        </div>

        {/*its represent all cards div*/}
        <div className='flex justify-center items-center flex-wrap max-w-7xl mx-auto my-0 '>
            {
                tours.map((data)=>{
                    return <ToursCard {...data} removeTour={removeTour}></ToursCard>
                })
            }
        </div>
      
    </div>
  )
}

export default Tours
