import data from './data/data.jsx';
import Tours from './components/Tours.jsx';
import {useState} from 'react'

const App = () => {
  const [tours,setTours] = useState(data);

  function removeTour(id){
      const newTour = tours.filter((ele)=>ele.id !== id);
      setTours(newTour);
  }

  if(tours.length === 0){
    return(
      <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-teal-200 via-cyan-300 to-indigo-400">
          
          <h1 className="text-5xl font-extrabold text-slate-800 mb-6">
              😔 No Tours Left
          </h1>

          <p className="text-lg text-gray-600 mb-8">
              Looks like you've removed all the tours.
          </p>

          <button
              onClick={() => setTours(data)}
              className="px-8 py-3 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
              🔄 Refresh
          </button>

      </div>
    )
  }

  return (
    <div 
      className="min-h-screen bg-linear-to-br from-teal-200 via-cyan-300 to-indigo-400"
    >

      <Tours 
        tours={tours} 
        removeTour={removeTour}
      ></Tours>
    </div>
  )
}

export default App;
