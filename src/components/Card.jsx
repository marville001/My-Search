import React from 'react'

const Card = ({item}) => {
    return (
        <div className="bg-gray-100 rounded-xl dark:bg-gray-700 p-5 w-full sm:w-80 md:w-60 lg:w-52 flex-grow">
            <h4 className="dark:text-gray-200">Card Title</h4>
            <hr className="bg-gray-300  border-gray-300 border-2 rounded-sm dark:border-gray-500 dark:bg-gray-500"/>
            <div className="list max-h-52 overflow-auto pt-2">
                {[1,2,3,4,5,6,7,8,9,1,2,3,4].map(i=>(
                    <div className="flex">
                        <a target="_blank" href="somewhere.com">Somewhere {i}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
