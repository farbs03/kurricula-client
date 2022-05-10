import StarSolid from '@heroicons/react/solid/StarIcon'
import StarOutline from '@heroicons/react/outline/StarIcon'
import React , {useState} from 'react'

const Rating = ({variant, displayValue}) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleMouseLeave() {
        if(rating === 0) {
            setRating(0)
            setHover(0)
        }
    }

    return (
        <div classname='w-fit flex items-center h-6' onMouseLeave={handleMouseLeave}>
            {[1, 2, 3, 4, 5].map((val) => (
                <>
                    {variant === 'display' ?
                        <button 
                            className='w-6 h-6 mx-1 transition-all duration-200 ease-in text-center' 
                        >
                            {val <= displayValue ?
                                <StarSolid className='w-6 h-6 text-emerald-300' />
                                :
                                <StarOutline className='w-6 h-6 text-gray-500' />
                            }
                        </button>
                        :
                        <button 
                            className='w-6 h-6 mx-1 transition-all duration-200 ease-in text-center' 
                            onMouseOver={() => setHover(val)} 
                            onClick={() => setRating(val)}
                        >
                            {val <= hover || val <= rating ?
                                <StarSolid className='w-6 h-6 text-emerald-300' />
                                :
                                <StarOutline className='w-6 h-6 text-gray-500' />
                            }
                        </button>
                    }
                    
                </>
            ))}
        </div>
    )
}

export default Rating
