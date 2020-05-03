import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField'; 
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResult from '../image-result/ImageResult';
class Search extends React.Component
{
    state ={
        searchText: '',
        amount: 15,
        apiUrl:'https://pixabay.com/api',
        apiKey:'',
        images : []
    }
    onAmountChange = (e,index,value)=>
    {
        this.setState({amount:value});
    }
    onTextChange = (e) =>
    {
       var val = e.target.value;
       if(val === '')
       {
          this.setState({images:[],searchText:''})
       }
       else{
        this.setState({[e.target.name] : e.target.value},()=>{
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err))
        });
       }
    }
   render()
   {
       console.log(this.state.images);
       return(
             <div>
                 <TextField
                  name = "searchText"
                  value = {this.state.searchText}
                  onChange = {this.onTextChange}
                  floatingLabelText = "Search For Images"
                  fullWidth={true}
                  />
                  <br/>
                  <SelectField name="Amount" floatingLabelText="Amount" value={this.state.amount} onChange={this.onAmountChange}>
                      <MenuItem value={5} primaryText="5"/>
                      <MenuItem value={10} primaryText="10"/>
                      <MenuItem value={15} primaryText="15"/>
                      <MenuItem value={30} primaryText="30"/>
                      <MenuItem value={50} primaryText="50"/>
                  </SelectField>
                  <br/>
                  {this.state.images.length >0 ? (<ImageResult images={this.state.images}/>): null}
                  <br/>
             </div>
       );
   }
}
export default Search;