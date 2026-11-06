import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const Pracownicy = [
    {id: 1, imie: "Anna", nazwisko: "Kowalska", dzial: "IT", pensja: 7200},
    {id: 2, imie: "Piotr", nazwisko: "Nowak", dzial: "Sprzedaż", pensja: 5400},
    {id: 3, imie: "Maria", nazwisko: "Wiśniewska", dzial: "Księgowość", pensja: 6100},
    {id: 4, imie: "Jan", nazwisko: "Kowalczyk", dzial: "IT", pensja: 8300},
    {id: 5, imie: "Katarzyna", nazwisko: "Zielińska", dzial: "Sprzedaż", pensja: 5900},
    {id: 6, imie: "Tomasz", nazwisko: "Szymański", dzial: "IT", pensja: 9100},
    {id: 7, imie: "Agnieszka", nazwisko: "Woźniak", dzial: "Księgowość", pensja: 6400},
    {id: 8, imie: "Michał", nazwisko: "Kaczmarek", dzial: "Sprzedaż", pensja: 5200},
    {id: 9, imie: "Magdalena", nazwisko: "Mazur", dzial: "IT", pensja: 7800},
  ]
  const [nazwisko, setNazwisko] = useState("");
  const [dzial, setDzial] = useState("");

  const ustawNazwisko = (e) => 
    {
      setNazwisko(e.target.value);
    }
  const ustawDzial = (e) => 
    {
      setDzial(e.target.value);
    }
  const przefiltrowaniPracownicy = Pracownicy.filter(pracownik =>
    pracownik.nazwisko.toLowerCase().includes(nazwisko.trim().toLowerCase())&&(dzial === '' || pracownik.dzial === dzial)
  ) 
  return (
    <>
      <h2>Pracownicy: </h2>
      <div className='d-flex gap-2'>
        <div className="mb-3 w-100">
          <label htmlFor="szukaj" className="form-label">Szukaj:</label>
          <input type="text" className="form-control" id="szukaj" onChange={ustawNazwisko} />
        </div>

        <div className="mb-3 w-100">
          <label htmlFor="dzial" className="form-label">Dział:</label>
          <select className="form-select" id="dzial" onChange={ustawDzial}>
            <option value="">Wszystkie</option>
            <option value="IT">IT</option>
            <option value="sprzedaz">Sprzedaż</option>
            <option value="ksiegowosc">Księgowość</option>
          </select>
        </div>
      </div>  


      <p className='fw-bold'>Liczba pracowników: {przefiltrowaniPracownicy.length}</p>

      {przefiltrowaniPracownicy.length > 0 ? (
      <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Imię</th>
              <th scope="col">Nazwisko</th>
              <th scope="col">Dział</th>
              <th scope="col">Pensja</th>
            </tr>
          </thead>
        <tbody>
          {przefiltrowaniPracownicy.map(pracownik =>(
            <tr key={pracownik.id}>
              <td>{pracownik.imie}</td>
              <td>{pracownik.nazwisko}</td>
              <td>{pracownik.dzial}</td>
              <td>{pracownik.pensja}</td>
            </tr>
          ))}
        </tbody>
      </table>

      ):(
        <div className='alert alert-warning' role='alert'>Brak pracowników spelniajacych kryteria</div>
      )}
    </>
  )
}

export default App
