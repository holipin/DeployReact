import React from 'react';
import PropTypes from 'prop-types';


const GetSingleRcd = ({ ImgURL }) => {
    // Check if ImgURL is not empty or null
    if (ImgURL && ImgURL.trim() !== "") {
        // Extract the breed name from the ImgURL
        const startIndex = ImgURL.indexOf('/breeds/') + '/breeds/'.length;
        const endIndex = ImgURL.indexOf('/', startIndex);
        const breedName = ImgURL.substring(startIndex, endIndex);

        // Log the breed name to the console
        console.log(breedName);

        return (
            <div style={{ margin : "5px" }}>
                <img className="ImgRecord" src={ImgURL} alt={breedName}></img>
                <p>{breedName}</p>
                
            </div>
            
           
        );
    } else {
        return null; // Return null if ImgURL is empty or null
    }
}


GetSingleRcd.propTypes = {
    ImgURL: PropTypes.string,
    /* age: PropTypes.number.isRequired*/
};

export default GetSingleRcd;
