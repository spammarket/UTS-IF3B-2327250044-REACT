import React, { useState } from "react";
import axios from "axios";

export default function CreateFakultas() {
    const [ruangan, setRuangan] = useState("");
    const [lantai, setLantai] = useState("");
    const [grade, setGrade] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (ruangan.trim() === "") {
            setError("Nama Ruangan is required");
            return;
        }

        try {
            const response = await axios.post(
                "https://uts-if-3-b-2327250044-api.vercel.app/api/api/rooms",
                { ruangan: ruangan, lantai: lantai, grade: grade, status: status }
            );
            if (response.status === 201) {
                setSuccess("Rooms Berhasil Ditambahkan");
                setRuangan("");
                setLantai("");
                setGrade("");
                setStatus("");
            } else {
                setError("Gagal menambahkan Rooms");
            }
        } catch (error) {
            setError("Gagal saat menambahkan Rooms");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Tambah Rooms</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="namaJenis" className="form-label">Rooms</label>

                    <input type="text" className="form-control" id="namaJenis"
                        value={ruangan} onChange={(e) => setRuangan(e.target.value)}
                        placeholder="Masukkan Ruangan"
                    />

                    <label htmlFor="deskripsi" className="form-label">Floor</label>

                    <input type="text" className="form-control" id="deskripsi   "
                        value={lantai} onChange={(e) => setLantai(e.target.value)}
                        placeholder="Masukkan Lantai"
                    />
                    <label htmlFor="Grade" className="form-label">Grade</label>

                    <input type="text" className="form-control" id="Grade"
                        value={grade} onChange={(e) => setGrade(e.target.value)}
                        placeholder="Masukkan Grade"
                    />

                    <label htmlFor="Status" className="form-label">Status</label>

                    <input type="text" className="form-control" id="Status"
                        value={status} onChange={(e) => setStatus(e.target.value)}
                        placeholder="Masukkan Grade"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Tambah</button>
            </form>
        </div>


    );
}