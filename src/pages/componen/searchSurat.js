// import React from "react";
// import { useState, useEffect } from "react";
// import { Card, Form, Button } from "react-bootstrap";
// import axios from "axios";

// export default function SearchSurat() {
//   const [listSurat, setListSurat] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [searchInput, setSearchInput] = useState("");

//   const getApi = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/quran.json`);
//       setListSurat(data);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getApi();
//   }, []);
//   const itemList = [data.surat];
//   const [filteredList, setFilteredList] = new useState(itemList);

//   const filterBySearch = (event) => {
//     // Access input value
//     const query = event.target.value;
//     // Create copy of item list
//     var updatedList = [...itemList];
//     // Include all elements which includes the search query
//     updatedList = updatedList.filter((item) => {
//       return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//     });
//     // Trigger render with updated values
//     setFilteredList(updatedList);
//   };

//   return;
// }

import { useState, useEffect } from "react";
import { Row, Card, Col } from "react-bootstrap";
import axios from "axios";

// Note: the empty deps array [] means
// this useEffect will run once
const SearchSurat = () => {
  const [listSurat, setListSurat] = useState([]);
  const [text, setText] = useState([]);
  const [surat, setSurat] = useState([]);
  let [arr, setArr] = useState("");

  const getApi = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/quran.json`);
      setListSurat(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  let tes = [{ name: "sanas" }, { name: "martunis" }];

  const onChangeHandler = (text) => {
    setText(text);
    let search = listSurat.find((srt) => srt.name === text);

    console.log(search);

    console.log(text);
  };

  return (
    <div>
      <input className="mt-5" type={text} placeholder="cari surat" value={text} onChange={(e) => onChangeHandler(e.target.value)} />
      <button>cari</button>
      <div>{text}</div>

      <div className="container mt-5 p-5">
        {listSurat?.map((surat) => {
          return <h1 key={surat.number_of_surah}>{surat.name}</h1>;
        })}
      </div>
    </div>
  );
};
export default SearchSurat;
