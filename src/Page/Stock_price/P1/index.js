import React, { useEffect, useState } from 'react';
import './P1.css';
import Menu from '../../../Components/Menu/menu';
import axios from 'axios';

function Index() {
  const [stockPrices, setStockPrices] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY+"/api/stock-prices") 
      .then((response) => {
        const sortedData = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setStockPrices(sortedData); 
        setFilteredPrices(sortedData);
      })
      .catch((error) => {
        console.error('Error fetching stock prices:', error); // แสดง error ในกรณีดึงข้อมูลไม่สำเร็จ
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
      const sortedFiltered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date)); // เรียงลำดับจากใหม่ไปเก่า
      setFilteredPrices(sortedFiltered);
    } else {
      setFilteredPrices(stockPrices); // หากไม่ได้เลือกช่วงเวลา ให้แสดงข้อมูลทั้งหมด
    }
  };
  

  return (
    <div>
      <Menu />
      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/15.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '45vh',
        }}
      >
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1 className="display-3 text-capitalize mb-3" style={{ color: 'white', marginTop: '60px' }}>
              ราคาหลักทรัพย์ย้อนหลัง
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
              วันที่เริ่มต้น:
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
              วันที่สิ้นสุด:
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
              กรองข้อมูล
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
                      <th>วันที่</th>
                      <th>ราคาเปิด</th>
                      <th>ราคาสูงสุด</th>
                      <th>ราคาต่ำสุด</th>
                      <th>ราคาเปิดย้อนหลัง</th>
                      <th>การเปลี่ยนแปลง</th>
                      <th>% เปลี่ยนแปลง</th>
                      <th>มูลค่าการซื้อขาย</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPrices.length > 0 ? (
                      filteredPrices.map((price, index) => (
                        <tr key={index}>
                          <td>{price.date}</td>
                          <td>{price.open_price}</td>
                          <td>{price.high_price}</td>
                          <td>{price.low_price}</td>
                          <td>{price.previous_close_price}</td>
                          <td>{price.change}</td>
                          <td
                            style={{
                              color: price.changepercent > 0 ? 'blue' : price.changepercent < 0 ? 'red' : 'black',
                            }}
                          >
                            {price.changepercent}
                          </td>
                          <td>{price.trading_value}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center" style={{ borderRadius: '30px', border: '1px solid #ddd' }}>
                          ไม่พบข้อมูลในช่วงเวลาที่เลือก
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
