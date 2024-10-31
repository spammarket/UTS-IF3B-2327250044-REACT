import React, { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

export default function List() {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get("https://uts-if-3-b-2327250044-api.vercel.app/api/api/rooms")
            .then((response) => {
                console.log(response.data.result)
                setRooms(response.data.result)
            })
            .catch(error => {
                console.log('Error : ', error)
            })
    }, [])

    return (
        <>
            <h2>Jenis Sampah</h2>

            {/* Button tambah Jenis Sampah */}
            <NavLink to="/rooms/create" className="btn btn-primary my-4">+ Tambah Rooms</NavLink>

            <ul className="list-group">
               <table className="table table-success table-striped-columns">
                        <thead>
                            <tr>
                                <th scope="col">Ruangan</th>
                                <th scope="col">Lantai</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Status</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rooms.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.ruangan}</td>
                                            <td>{data.lantai}</td>
                                            <td>{data.grade}</td>
                                            <td>{data.status}</td>
                                        </tr>
                                ))}
                        </tbody>
                    </table>
            </ul>
        </>
    )
}