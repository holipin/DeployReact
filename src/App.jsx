import React from 'react'
import { useEffect, useState } from 'react'
import './App.css';


import reactLogo from './assets/react.svg'
import SearchLogo from './assets/search.svg'
import GetSingleRcd from './SingleRcd';
import FAQ from './FAQ';

import viteLogo from '/vite.svg'
import Overview from './FAQ';

/*import './App.css'*/
//import * as React from 'react'

//https://react.dev/learn/tutorial-tic-tac-toe
// https://dog.ceo/dog-api/documentation/breed

//const LstRecords = {
//"message": [
//    "https://images.dog.ceo/breeds/hound-basset/n02088238_10113.jpg",
//    "https://images.dog.ceo/breeds/hound-blood/n02088466_10831.jpg",
//    "https://images.dog.ceo/breeds/hound-english/n02089973_1249.jpg"
//],
//    "status": "success"
//};
const API_URL = 'https://dog.ceo/api/breeds/image/random/5'; //


const App = () => {

    // State to store the breed name
    const [LstRecords, setLstRecords] = useState([]); // ([]) mean , Default value = empty array
    //const [StringVar1, setStringVar1] = useState('');

    const [showTnC, setShowTnC] = useState(false); // State to control the visibility of the TnC component

    const handleTnCClick = () => {
        setShowTnC(prevState => !prevState); // Set showTnC state to true\false when the image is clicked
    };

    const SeachDog = async (title) => {
        const Response = await fetch(`${API_URL}`);
        const httpObject = await Response.json();
        console.log(httpObject);

        //const record = httpObject.message[1];
        setLstRecords(httpObject.message);
        //setLstRecords([]);
        console.log(LstRecords[1]);


    };


    // Function to reload the page
    const reloadPage = () => {
        window.location.reload(); // Reload the page
    };

    const DummyMessage = ({ ErrMsg }) => {
        alert('Err Msg ' + ErrMsg);
    };


    useEffect(() => {
        SeachDog('some string');

    }, []);

    return (
        <div className="App">
            <h1>App Title</h1>


            <div className="Seach">
                <input type="text" placeholder="Search Dog Under construction" onChange={() => { }} />
                <img className="logo" src={reactLogo} alt="Reload" onClick={reloadPage} />
                <img className="logo" src={SearchLogo} alt="Search" onClick={handleTnCClick} />
                {showTnC && <FAQ />}

            </div>

            <div className="Container">
                {
                    LstRecords?.length > 0
                        ? (
                            <div className="flex-container">
                                {/*call a componenet using element[1] as parameter */}
                                {/*<GetSingleRcd ImgURL={LstRecords[1]} />*/}

                                {/*Loop through the array and call the component*/}
                                {
                                    LstRecords.map((record, index) => (
                                        <GetSingleRcd ImgURL={record} />))
                                }


                            </div>
                        ) : (
                            <div>
                                <h2> No Data Found</h2>

                            </div>
                        )
                }
            </div>


        </div>
    );
}

export default App;
