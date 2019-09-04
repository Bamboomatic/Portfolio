import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

class Gallery extends Component {

    render() {

        const images = [
            {
                original: 'https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
        ];

        return (
            <div className="mainWidth">
                 <ImageGallery items={images} />
            </div>
        );
    }

}

export default Gallery;