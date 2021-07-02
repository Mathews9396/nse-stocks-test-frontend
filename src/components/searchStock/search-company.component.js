import React, { useState } from 'react';
// import http from '../../http-common';
import '../../App.css'
import './searchBar.css'
import { Link } from 'react-router-dom';
import StockResultDetail from './stockResultDetail.component'
import AutoComplete from './autoCompleteSuggestion.component';

function SearchStock() {

    const [company, setCompany] = useState('');
    const [display, setDisplay] = useState('inactive');

    const triggerResult = () => {
        console.log("search clicked");
        setDisplay('active');
    }

    return (
        <div className="search-stocks">
            <h1 className="search-stocks-heading">Search for a company</h1>
            <input
                className="search-bar"
                key="random1"
                value={company}
                placeholder={"search stocks"}
                onChange={(e) => {
                    setCompany(e.target.value)
                    setDisplay('inactive')
                }
                }
            />
            <Link to={`/stocks/find/${company}`} onClick={triggerResult} className="search-stock-button">
                <button className="search-stock-button" onClick={triggerResult}>
                    Search
                </button>
            </Link>

            <div className="auto-complete">
                {(company !== '' && display === 'inactive') && (
                    <AutoComplete keyword={company} />
                )}
            </div>
            
            <div>
                {(display === 'active') && (
                    <StockResultDetail keyword={company} />
                )}
            </div>

        </div>
    )
}

export default SearchStock;

// {displayResult==='active' &&(
//     <StockResultDetail />
// )}

