import React, { useState } from 'react';
import './P2.css';
import Menu from '../../../Components/Menu/menu';
import { calculateResults, formatNumber } from './calculator';

function Index() { // เปลี่ยนเป็นตัวอักษรพิมพ์ใหญ่
  const [openPrice, setOpenPrice] = useState('');
  const [closePrice, setClosePrice] = useState('');
  const [shares, setShares] = useState('');
  const [commissionRate, setCommissionRate] = useState('');
  const [minCommission, setMinCommission] = useState('');
  const [vatRate, setVatRate] = useState('');
  const [dividendTaxed, setDividendTaxed] = useState('');
  const [dividendExempt, setDividendExempt] = useState('');
  const [results, setResults] = useState(null);

  const calculateInvestment = () => {
    const data = {
      sharesHeld: parseFloat(shares) || 0,
      pricePurchase: parseFloat(openPrice) || 0,
      priceSold: parseFloat(closePrice) || 0,
      commissionRate: parseFloat(commissionRate) || 0,
      minCommission: parseFloat(minCommission) || 0,
      vatRate: parseFloat(vatRate) || 0,
      dividendTaxed: parseFloat(dividendTaxed) || 0,
      dividendExempt: parseFloat(dividendExempt) || 0,
    };

    const calculatedResults = calculateResults(data);
    setResults(calculatedResults);
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
      <div className="container-fluid py-5" style={{ backgroundColor: 'white' }}>
  <h2 className="text-center mb-5">เครื่องมือคำนวณราคาหุ้น</h2>
  <div className="row justify-content-center">
    <div className="col-md-10">
      {/* Card for Input Form */}
      <div className="card shadow">
        <div className="card-header text-center bg-primary text-white">
          <h4>กรอกข้อมูลการลงทุน</h4>
        </div>
        <div className="card-body">
          {/* Row of Inputs */}
          <div className="row">
            <div className="col-md-3 mb-3">
              <label>ราคาเปิด (Open Price):</label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกราคาเปิด"
                value={openPrice}
                onChange={(e) => setOpenPrice(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label>ราคาปิด (Close Price):</label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกราคาปิด"
                value={closePrice}
                onChange={(e) => setClosePrice(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label>จำนวนหุ้น (Shares):</label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกจำนวนหุ้น"
                value={shares}
                onChange={(e) => setShares(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label>อัตราค่าคอมมิชชั่น (%):</label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกอัตราค่าคอมมิชชั่น"
                value={commissionRate}
                onChange={(e) => setCommissionRate(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label>ค่าคอมมิชชั่นขั้นต่ำ (บาท):</label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกค่าคอมมิชชั่นขั้นต่ำ"
                value={minCommission}
                onChange={(e) => setMinCommission(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label>อัตรา VAT (%):</label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกอัตรา VAT"
                value={vatRate}
                onChange={(e) => setVatRate(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label>เงินปันผลที่ต้องเสียภาษี (บาท):</label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกเงินปันผลที่ต้องเสียภาษี"
                value={dividendTaxed}
                onChange={(e) => setDividendTaxed(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label>เงินปันผลที่ยกเว้นภาษี (บาท):</label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกเงินปันผลที่ยกเว้นภาษี"
                value={dividendExempt}
                onChange={(e) => setDividendExempt(e.target.value)}
              />
            </div>
          </div>

          <button
            className="btn btn-primary w-100 mt-3"
            onClick={calculateInvestment}
          >
            คำนวณ
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Results Section */}
  {results && (
    <div className="row justify-content-center mt-5">
      <div className="col-md-10">
        <div className="card shadow">
          <div className="card-header text-center bg-success text-white">
            <h4>ผลการคำนวณ</h4>
          </div>
          <div className="card-body">
            <p><strong>กำไร:</strong> {formatNumber(results.profit)} บาท</p>
            <p><strong>ค่าคอมมิชชั่นรวม:</strong> {formatNumber(results.commission)} บาท</p>
            <p><strong>VAT:</strong> {formatNumber(results.vat)} บาท</p>
            <p><strong>กำไรสุทธิ:</strong> {formatNumber(results.netProfit)} บาท</p>
            <p><strong>การเปลี่ยนแปลงการลงทุน (%):</strong> {results.investChangePercent} %</p>
            <p><strong>เงินปันผลสุทธิ:</strong> {formatNumber(results.netDividend)} บาท</p>
          </div>
        </div>
      </div>
    </div>
  )}
</div>


    </div>
  );
}

export default Index;
