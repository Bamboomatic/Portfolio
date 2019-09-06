import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

class Gallery extends Component {

    render() {

if(this.props.gallery === ''){
    return <span></span>
}

        return (
            <div className="mainWidth gallery">
                 <ImageGallery showThumbnails={true} items={this.props.gallery} />
            </div>
        );
    }

}

export default Gallery;