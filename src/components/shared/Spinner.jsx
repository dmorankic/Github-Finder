import React from 'react'
import spinner from '../layout/assets/spinner (1).gif'

function Spinner() {
    return (
        <div className='w-100 mt-20'>
            <img src={spinner} alt='Loading...' style={{
                width: '100px'
                , margin: 'auto', display: 'block'
            }} className='text-center mx-auto' />
        </div>

    )
}

export default Spinner