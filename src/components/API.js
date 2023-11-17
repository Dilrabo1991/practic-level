import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const url = "https://api.unsplash.com/photos/?client_id=sKR5kUv3JyeeJd4B6jDV4aZCq3huC_dgKNpRiq3zAT8"
const API = () => {
    const [images, setImages] = useState([])
    const fetchApi = async () => {
        const res = await axios.get(url);
        const data = await res.data;
        setImages(data);
        console.log(data);
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div className="container">
            <br></br>
            {/* <button onClick={fetchApi}>Fetch API</button> */}
            <br></br>
            <div className="photos" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {images.length > 0 && (
                    images.map((image) => (
                        <div className="photo" style={{ width: '500px', height: '400px', margin: '10px', objectFit: 'cover', overflow: 'hidden' }}>
                            <LazyLoadImage
                                height={400}
                                width={500}
                                src={image.urls.small}
                                alt={image.description}
                                key={image.id}
                                effect='blur'
                                placeholderSrc='url' />

                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default API
