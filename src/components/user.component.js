import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import http from '../http-common';

function UserProfile() {



  const deleteTable = async () => {
    await http.post(`/user/delete-table`, {
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((response) => {
    }).catch((err) => {
      console.log("error - ", err);
      alert("Need to authenticate to use this page");
      throw err;
    })
  }

  const addData = async () => {
    await http.post(`/user/add-data`, {
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((response) => {
      // console.log((response.data.message));
    }).catch((err) => {
      console.log("error - ", err);
      alert("Need to authenticate to use this page");
      throw err;
    })
  }

  const deleteData = async () => {
    await http.post(`/user/delete-data`, {
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((response) => {
      console.log(response);

    }).catch((err) => {
      alert("Need to authenticate to use this");
      throw err;
    })
  }


  const createTable = () => {
    http.post(`/user/create-table`, {
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      alert("Login to use this function");
      throw err;
    })
  }



  return (
    <div className="user-management">
      <h3 className="user-management-heading">Manage the Database</h3>
      <ul className="user-buttons">
        <Link to="/user/create-table" onClick={createTable}>
          <li>Create Stock Table</li>
        </Link>

        <Link to="/user/add-data" onClick={addData}>
          <li>Import Stock Data</li>
        </Link>

        <Link to="/user/delete-data" onClick={deleteData}>
          <li>Delete Stock Data</li>
        </Link>

        <Link to="/user/delete-table" onClick={deleteTable}>
          <li>Delete Stock Table</li>
        </Link>


      </ul>
    </div>
  )
}

export default UserProfile;

// <Link to="/user/create-users" onClick={createUsersTable}>
// <li>Create Users Table</li>
// </Link>

// <Link to="/user/get-all-users" onClick={getAllUsers}>
// <li>Get All Users</li>
// </Link>

// const getAllUsers = async () => {
//   await http.get(`/user/get-all-users`, {
//     headers: {
//       "content-type": "application/json",
//       "Authorization": `Bearer ${localStorage.getItem("token")}`,
//     }
//   }).then((response) => {
//     console.log("success");
//   }).catch((err) => {
//     alert("Need to authenticate to use this page");
//     throw err;
//   })
// }
// const createUsersTable = async () => {
//   await http.post(`/user/create-users`, {
//     headers: {
//       "content-type": "application/json",
//       "Authorization": `Bearer ${localStorage.getItem("token")}`,
//     }
//   }).then((response) => {
//     console.log(response);
//   }).catch((err) => {
//     alert("Need to authenticate to use this");
//     throw err;
//   })
// }
