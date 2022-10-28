import { useState } from "react"
const SearchPage = () => {

    const [tipeCar, setTipeCar] = useState();
    const [tanggalRental, setTanggalRental] = useState();

    const searchCar = () => {
        console.log("berhasil di click")
    } 
    return (
        <>
            <h1>Cari mobil</h1>
            <select id="tipe" onChange={(event) => setTipeCar(event.target.value)}>
                <option value="Sedan">Sedan</option>
                <option value="Convertible">Convertible</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Minivan">Minivan</option>
            </select>
            <input type="date" id="tanggal" onChange={(event) => setTanggalRental(event.target.value)} />
            <button onClick={searchCar}>Search</button>
        </>
    )
}

export default SearchPage;