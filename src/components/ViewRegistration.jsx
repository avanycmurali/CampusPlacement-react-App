import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewRegistration = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (resonse)=>{
                changeData(resonse.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        }
    )
    return (
        <div>
            <NavigationBar/>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Registration Number</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Brach</th>
                        <th scope="col">SSLC Mark</th>
                        <th scope="col">Plus Two Mark</th>
                        <th scope="col">UG Mark</th>
                        <th scope="col">PG Mark</th>
                    </tr>
                </thead>
                <tbody>

                   {data.map(
                    (value,index)=>{
                        return(
                             <tr>
                        <th scope="row">{value.regNo}</th>
                        <td>{value.fullName}</td>
                        <td>{value.branch}</td>
                        <td>{value.sslcMark}</td>
                        <td>{value.plusTwoMark}</td>
                        <td>{value.ugDegree}</td>
                        <td>{value.pgDegree}</td>
                    </tr>
                        )
                    }
                   )}

                </tbody>
            </table>

        </div>
    )
}

export default ViewRegistration