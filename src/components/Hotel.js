import React, { useState, useEffect} from 'react';

const Hotel = ({name, city, stars}) => {

    const [shown, setShown] = useState(false)

    return (
        <div>
            <p>{name}</p>
            {shown && <p>{city}</p>}
            {shown ? <button onClick={() => setShown(false)}>Show less</button> : <button onClick={() => setShown(true)}>Show more</button>}
        </div>
    )

}

export default Hotel;