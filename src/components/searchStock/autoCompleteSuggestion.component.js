import React, { useState, useEffect } from 'react';
import './searchBar.css'
import { Link } from 'react-router-dom';
import http from '../../http-common';
import StockResultDetail from './stockResultDetail.component';


function AutoComplete({ keyword }) {

    const [companies, setCompanies] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        fetchItem()
    }, [keyword])
    // const triggerResult = () => {
    //     setDisplay('active');
    // }

    const fetchItem = async () => {
        await http.get(`stocks/find/${keyword}`, {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        }).then((response) => {
            if (response.data.message === "no records found") {
                console.log(response.data.message);
            }
            else {
                var outputStock = response.data.data;
                var arr = [];
                for (var stock in outputStock) {
                    var query = outputStock[stock].Name;
                    arr.push(query);
                }
                setCompanies(arr);
            }
        }).catch((err) => {
            alert('Need to authenticate to search');
            throw err;
        })
    }

    return (
        <div>
            {companies.map(item => (
                <Link className="stock-suggestions">
                    <h4 className="stock-suggestion" key={item}>
                        <div className="stock-suggestion-item">
                            {item}
                        </div>
                    </h4>
                </Link>
            ))}


        </div>
    )
}

export default AutoComplete;
