import React from 'react';
//import axios from 'axios';
import './header.css';
import ClearIcon from '@material-ui/icons/Clear';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { connect } from "react-redux";
import { fetchImages } from '../../Redux/actions'

class Header extends React.Component {

    state = {
        searchInput: '',
        images: [],
        visible: false,
        baseUrl: 'https://pixabay.com/api/?key=',
        KEY: '22095965-4986481008fb7e0284b163ac0'
    }


    handleOnChange = (event) => {
        const val = event.target.value;
        this.setState({ [event.target.name]: val });
        //console.log(event.target.value);
        if (!val)
            this.setState({ visible: false });
        else
            this.setState({ visible: true });
    }

    handleSearch = () => {
        if (this.state.searchInput) {
            var word = this.state.searchInput.trim().replace(/ /g, "+");
            this.props.fetchImages(word);
            // Make a request for a user with a given ID
            // axios.get(`${this.state.baseUrl}${this.state.KEY}&q=${word}&image_type=photo`)
            //     .then(res => {
            //         // handle success
            //         console.log(res.data.hits);
            //         //dispatch(addSearchImages(res.data.hits));
            //         this.setState({ images: res.data.hits });
            //     })
            //     .catch(function (error) {
            //         // handle error
            //         console.log(error);
            //     });
        }
        else
            alert("Search can not be empty!!");
    }

    handleClear = () => {
        this.setState({ searchInput: '', visible: false });
        //this.setState({ visible: false})
        // setVisible(false);
        //console.log("click");
    }

    render() {
        //console.warn("check api data", this.props.images);
        return (
            <div className="header">
                <div className="header_title">
                    <h3>Ayan's Gallery</h3>
                </div>

                <div className="header_search">
                    <input className="header_searchInput" type="text" value={this.state.searchInput} onChange={this.handleOnChange}
                        placeholder="Search for an image" name="searchInput" />
                    <ImageSearchIcon className="searchIcon" onClick={this.handleSearch} />
                    <ClearIcon className={this.state.visible ? 'clearIcon' : 'remove'} onClick={this.handleClear} />
                </div>
                <div className="header-optionMenu">
                    <label>Sort</label>
                    <select>
                        <option disabled selected>Select</option>
                        <option>By Views</option>
                        <option>By Image Size</option>
                    </select>

                </div>
            </div>
        )
    }

}


// const mapStateToProps = state => {
//     return {
//         images: state.images
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchImages: () => dispatch(fetchImages())
//     };
// };

// const mapDispachToProps = dispatch => {
//     return {
//         search: () => dispatch({ type: "ADD_SEARCH_IMAGES", value: 1 }),
//         onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
//     };
// };
export default connect(null, { fetchImages })(Header);