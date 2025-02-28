import React, { useEffect, useState } from 'react';
import './P1.css';
import Menu from "../../../../Components/Menu/menu";
import axios from 'axios';

function Index() {
  const [stockPrices, setStockPrices] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rowsToShow, setRowsToShow] = useState(25); // state สำหรับจำนวนแถวที่จะแสดง

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/stock-prices")
      .then((response) => {
        const sortedData = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setStockPrices(sortedData); 
        setFilteredPrices(sortedData);
      })
      .catch((error) => {
        console.error('Error fetching stock prices:', error);
      });
  }, []);
  
  const handleFilter = () => {
    if (startDate && endDate) {
      const filtered = stockPrices.filter((price) => {
        const priceDate = new Date(price.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return priceDate >= start && priceDate <= end;
      });
      const sortedFiltered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      setFilteredPrices(sortedFiltered);
    } else {
      setFilteredPrices(stockPrices);
    }
  };

  return (
    <div>
      <Menu />
      
      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/17.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '45vh',
        }}
      >
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1 className="display-3 text-capitalize mb-3" style={{ color: 'white', marginTop: '60px' }}>
            Historical Securities Prices
            </h1>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="container-fluid py-5" style={{ backgroundColor: 'white' }}>
        <div className="container py-3">
          <div className="row mb-3">
            <div className="col-md-4" style={{ width: '15%' }}>
              <label htmlFor="start-date" className="form-label">
              Start Date:
              </label>
              <input
                type="date"
                id="start-date"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="col-md-4" style={{ width: '15%' }}>
              <label htmlFor="end-date" className="form-label">
              End Date:
              </label>
              <input
                type="date"
                id="end-date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="col-md-4 d-flex align-items-end" style={{ width: '15%'}}>
              <button className="btn btn-primary w-100" onClick={handleFilter}>
              Filter
              </button>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover custom-table">
                  <thead className="thead-dark">
                    <tr>
                      <th>date</th>
                      <th>Opening Price</th>
                      <th>Highest Price</th>
                      <th>Lowest Price</th>
                      <th>Closing price</th>
                      <th>conversion</th>
                      <th>% change</th>
                      <th>Volume (Shares)</th>
                      <th>Turnover ('000) Bath</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPrices.length > 0 ? (
                      filteredPrices.slice(0, rowsToShow).map((price, index) => (
                        <tr key={index}>
                          <td className="text-end">{price.date}</td>
                          <td className="text-end">{Number(price.open_price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="text-end">{Number(price.high_price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="text-end">{Number(price.low_price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="text-end">{Number(price.previous_close_price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="text-end">{Number(price.change).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="text-end" style={{ color: price.changepercent > 0 ? 'blue' : price.changepercent < 0 ? 'red' : 'black' }}>
                            {Number(price.changepercent).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
                          </td>
                          <td className="text-end">{Number(price.trading_value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="text-end">{Number(price.trade_amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9" className="text-center">
                        No data found for the selected time period.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Dropdown สำหรับเลือกจำนวนข้อมูล */}
          <div className="d-flex justify-content-end mt-3">
            <label className="me-2">Show Data:</label>
            <select
              className="form-select w-auto"
              value={rowsToShow}
              onChange={(e) => setRowsToShow(Number(e.target.value))}
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
