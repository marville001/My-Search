import React from 'react'

const Card = ({item}) => {
    return (
        <div className="bg-gray-100 rounded-xl dark:bg-gray-700 p-5 w-full sm:w-100 md:w-80 lg:w-60 flex-grow">
            <h4 className="dark:text-gray-200">Card Title</h4>
            <hr className="bg-gray-300  border-gray-300 border-2 rounded-sm dark:border-gray-500 dark:bg-gray-500"/>
            <div className="list max-h-52 overflow-auto pt-2">
                {[1,2,3,4,5,6,7,8,9,1,2,3,4].map(i=>(
                    <div className="flex">
                        <a target="_blank" href="somewhere.com">Somewhere {i}</a>
                    </div>
                ))}
            </div>
            <div className="flex justify-center pt-4">
                <a href="#ggg" className="bg-blue-300 w-full py-1 text-center rounded-xl text-white">See All 12 Results</a>
            </div>
        </div>
    )
}

export default Card
