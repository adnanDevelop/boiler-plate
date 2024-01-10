import React from 'react'

const RatingStar = ({star ,review}) => {

    let ratingStar = Array.from({length : 5} , (element , index) => {
        let number = index + 0.5;
        // <i className="fa-solid fa-star"></i>                     fill star
        // <i className="fa-solid fa-star-half-stroke"></i>         empty start
        // i className="fa-regular fa-star"></i>                      half start
        /*
            4.5 > 1 | 4.5 > 2 | 4.5 > 3 | 4.5 > 4 | 5

        */ 
        return(
            <span key={index}>
                {star >= index + 1 ? (<i className="fa-solid fa-star"></i> ): star >= number ?( <i className="fa-solid fa-star-half-stroke"></i>)  : (<i className="fa-regular fa-star"></i>) }
            </span>
        )
    })
  return (
    <div>
      <span className='rating-star'>{ratingStar}</span>
    </div>
  )
}

export default RatingStar
