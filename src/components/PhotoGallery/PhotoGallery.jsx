import axios from "axios";
import React, { useEffect, useState } from "react";
import './PhotoGallery.scss'

const PhotoGallery = () => {

    const [photoData, setPhotoData] = useState([]);

    useEffect(()=>{
        const fetchPhotos = async() =>{
            const data = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
            // console.log(data.data)
            // console.log({data})
            setPhotoData(data.data);

            
        }

        fetchPhotos();

    }, [])
    return(
        <div className="photo-gallery">
            <h1>Kitty-Opia!!</h1>
            <div className="photo-gallery_container">
            {
            photoData.length !== 0 &&
            photoData.map((photo)=>(
                
                    <img className="photo-gallery_image" src={photo.url} key={photo.id}/>
                 
            )) 
            }
            </div> 
        </div>
    )
}

export default PhotoGallery;