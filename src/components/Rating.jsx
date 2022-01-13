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
        <div classname='w-fit flex items-center' onMouseLeave={handleMouseLeave}>
            {[1, 2, 3, 4, 5].map((val) => (
                <>
                    {variant === 'display' ?
                        <button 
                            className='w-5 h-5 mx-1 transition-all duration-200 ease-in text-center' 
                        >
                            {val <= displayValue ?
                                <StarSolid className='w-5 h-5 text-yellow-300' />
                                :
                                <StarOutline className='w-5 h-5 text-gray-500' />
                            }
                        </button>
                        :
                        <button 
                            className='w-5 h-5 mx-1 transition-all duration-200 ease-in text-center' 
                            onMouseOver={() => setHover(val)} 
                            onClick={() => setRating(val)}
                        >
                            {val <= hover || val <= rating ?
                                <StarSolid className='w-5 h-5 text-yellow-300' />
                                :
                                <StarOutline className='w-5 h-5 text-gray-500' />
                            }
                        </button>
                    }
                    
                </>
            ))}
        </div>
    )
}

export default Rating
