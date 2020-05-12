import React from 'react';
import './imageList.css';
//key makes each entry unique, so when the page gets rerendered it checks if that value is already in the table

const ImageList = props => {
    const images = props.images.map(image => {
        return (<img key={image.id} src={image.urls.regular} alt={image.description}/>);
    });
return <div className="image-list">{images}</div>;
};

export default ImageList;