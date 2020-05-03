import React from 'react';
import PropTypes from 'prop-types';
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
 class ImageResult extends React.Component
{
    state = {open:false, currentImage:''}
    onHandleOpen = img=>
    {
       this.setState ({open:true,currentImage:img});
    }
    onHandleClose = () =>
    {
       this.setState({open:false});
    }
   render()
   {
       let imageListContent;
       const  {images} = this.props;
       if(images)
       {
            imageListContent = (
                <GridList cols={3}>
                    {
                        images.map(img => (
                            <GridTile title={img.tags} key={img.id} 
                              subtitle ={
                                  <span>
                                      by <strong>{img.user}</strong>
                                  </span>
                              }
                              actionIcon = {
                                  <IconButton onClick={()=>this.onHandleOpen(img.largeImageURL)}>
                                      <ZoomIn color="white"/>
                                  </IconButton>
                              }
                             >
                                <img src={img.largeImageURL} alt="Nithin"/>
                            </GridTile>
                        ))
                    }
                </GridList>
            )
       }
       else{
            imageListContent = null;
       }
       const actions = [
           <FlatButton label="Close" primary={true} onClick={this.onHandleClose}/>
       ]
       return(
           <div>
              {imageListContent}
              <Dialog 
                actions ={actions}
                modal =  {false}
                open = {this.state.open}
                onRequestClose = {this.onHandleClose}
              > 
               <img src = {this.state.currentImage}  style = {{width : '100%'}}/>
              </Dialog>
           </div>
       );
   }
}
ImageResult.propTypes = {
    image: PropTypes.array.isRequired
}
export default ImageResult;