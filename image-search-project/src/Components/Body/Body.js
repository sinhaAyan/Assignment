import React from 'react';
import { connect } from 'react-redux';

import ImageGridList from './ImageGridList';

class Body extends React.Component {
    render() {
        const images = this.props.images;
        console.log(`Imgaes::${images}`);
        return (
            <div>
                <div className="image">
                    {images.length > 0 && <ImageGridList imageList={images} />}

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        images: state.images,
        loading: state.loading
    }
}
export default connect(mapStateToProps, null)(Body);