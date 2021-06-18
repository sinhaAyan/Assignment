import React, { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CloseIcon from '@material-ui/icons/Close';


export default function ImageGridList({ imageList }) {
  const [open, setOpen] = useState(false);
  const [selectImage, setSelectImage] = useState('');
  const onHandleOpen = img => {
    setSelectImage(img);
    setOpen(true);
    event(img);
    console.log({ img });
  }
  const onHandleClose = () => {
    setOpen(false);
  }
  const actions = [
    <CloseIcon label="Close" primary={true} onClick={onHandleClose} />
  ]
  const event = image => {
    <div className="main">
      <div><CloseIcon onClick={() => onHandleClose} /> </div>
      <div className="imageSection">
        <img src={image.largeImageURL} alt={image.name} />
      </div>
      <div className="details">
        <p>Likes: {image.likes} Views: {image.views} Comments: {image.comments}</p>
      </div>
    </div>
  }


  return (
    <div className="imageGridList">
      <div className="gridList">
        <GridList cellHeight={160} cols={4}>
          {imageList.map((image, id) => (
            <GridListTile key={image.tag} cols={image.cols || 1}>
              <img key={image.id} src={image.largeImageURL} alt={image.name} onClick={() => onHandleOpen(image)} />
              <GridListTileBar title={image.tags} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      {/* <div className="view">
        {open ? event() : null}
      </div> */}
    </div>
  );
}