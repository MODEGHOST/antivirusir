import React, { useState } from 'react';
import './P2.css';
import Menu from '../../../Components/Menu/menu';

function Index() { // เปลี่ยนเป็นตัวอักษรพิมพ์ใหญ่
  const [openPrice, setOpenPrice] = useState('');
  const [closePrice, setClosePrice] = useState('');
  const [shares, setShares] = useState('');
  const [totalValue, setTotalValue] = useState(null);

  const calculateTotalValue = () => {
    const total = ((parseFloat(openPrice) + parseFloat(closePrice)) / 2) * parseInt(shares);
    setTotalValue(total.toFixed(2)); // คำนวณและปรับให้เป็นทศนิยม 2 ตำแหน่ง
  };

  return (
    <div>
      <Menu />
      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/G.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '45vh',
        }}
      >
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1
              className="display-3 text-capitalize mb-3"
              style={{ color: 'white', marginTop: '60px' }}
            >
              เครื่องคำนวณการลงทุน
            </h1>
          </div>
        </div>
      </div>

      {/* Stock Calculator Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">เครื่องมือคิดคำนวนราคาหุ้น</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <label>ราคาเปิด (Open Price):</label>
              <input
                type="number"
                className="form-control"
                value={openPrice}
                onChange={(e) => setOpenPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>ราคาปิด (Close Price):</label>
              <input
                type="number"
                className="form-control"
                value={closePrice}
                onChange={(e) => setClosePrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>จำนวนหุ้น (Shares):</label>
              <input
                type="number"
                className="form-control"
                value={shares}
                onChange={(e) => setShares(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary w-100 mt-3"
              onClick={calculateTotalValue}
            >
              คำนวณ
            </button>
          </div>
        </div>

        {totalValue && (
          <div className="mt-4 text-center">
            <h4>มูลค่ารวมของหุ้น: {totalValue} บาท</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
