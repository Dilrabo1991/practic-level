import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const url = "https://api.unsplash.com/photos/random?client_id=sKR5kUv3JyeeJd4B6jDV4aZCq3huC_dgKNpRiq3zAT8&count=30&query=nature";//
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
            <h1 style={{ textAlign: 'center', padding: '20px', color: 'white', backgroundColor: 'lightPink', borderRadius: '10px' }}>Unsplash API</h1>
            <div className="photos" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center' }}>
                {images.length > 0 && (
                    images.map((image) => (
                        <div className="photo"
                            key={image.id}
                        >
                            <LazyLoadImage
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '50px'
                                }}
                                height={200}
                                width={300}
                                src={image.urls.small}
                                alt={image.description}
                                key={image.id}
                                // effect='blur'
                                placeholderSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8TX1FqS5WQgfcqEjXU2ctTgEA665niePgg7sX8qdzPgS85wyD62DgPL2qn34v-_-xcc&usqp=CAU' />

                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default API
