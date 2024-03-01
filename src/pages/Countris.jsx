import React, { useEffect, useState } from "react";
import { fetchAPI } from "../utils/network_helper";

const Countries = () => {
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCountryList();
  }, []);
  async function getCountryList() {
    setLoading(true);
    let countryRes = await fetchAPI();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (countryRes.status) {
      let tempArr = [];
      countryRes?.data?.countries.map((c) => {
        let name = c.name;
        let country = { name };
        tempArr.push(country);
        return;
      });
      setCountryList(tempArr);
    }
  }
  if (countryList.length === 0) {
    return <div className="m-2">No country List</div>;
  }
  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="m-2">
      {countryList?.map((country, index) => {
        return (
          <div className="m-2" key={index}>
            {country.name}
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
