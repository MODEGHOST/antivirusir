import React, { useEffect, useState } from 'react';
import Menu from '../../../Components/Menu/menu';
import './P1.css';
import axios from 'axios';

function Index() {
  const [activeTable, setActiveTable] = useState('table1');
  const [threeyear, setThreeyearData] = useState([]); // State สำหรับเลือกตารางที่แสดง
  const [quarterlyData, setQuarterlyData] = useState([]);
  const [quarandyearData, setQuarandyearData] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/threeyear/all")
      .then((response) => {
        let data = response.data.data;
        // เรียงข้อมูลจากปีใหม่ไปปีเก่าและเลือกเฉพาะ 3 ปีล่าสุด
        data.sort((a, b) => b.year - a.year);
        setThreeyearData(data.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // ดึงข้อมูลจาก API สำหรับ Quarterly
    axios
      .get("http://localhost:8000/api/quarterly/all") // ปรับ URL ให้ตรงกับ API ของ quarterly
      .then((response) => {
        const data = response.data.data;
        // เรียงข้อมูลตาม created_at จากใหม่ไปเก่า
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        // เลือกแค่ 3 ข้อมูลล่าสุด
        const latestData = data.slice(0, 3);
        setQuarterlyData(latestData);
      })
      .catch((error) => {
        console.error("Error fetching quarterly data:", error);
      });
  }, []);
  
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/quarandyear/all")
      .then((response) => {
        const data = response.data.data;
        console.log("quarandyearData:", data); // ตรวจสอบข้อมูลในคอนโซล
        data.sort((a, b) => a.id - b.id);
        setQuarandyearData(data);
      })
      .catch((error) => {
        console.error("Error fetching quarandyear data:", error);
      });
  }, []);
  
  
  

  

  const handleTableToggle = (table) => {
    setActiveTable(table);
  };
  return (

      <div>
     <Menu />

        {/* Hero Section */}
        <div className="container-fluid py-5 sticky-service" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/1.png)`, backgroundSize: 'cover', backgroundPosition: 'center',height: '45vh' }}>
          <div className="container py-5">
            <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
              <h1 className="display-3 text-capitalize mb-3" style={{ color: 'white', marginTop: '60px' }}>ข้อมูลสำคัญทางการเงิน</h1>
            </div>
          </div>
        </div>

        {/* Service Section */}
<div className="container-fluid service bg-light overflow-hidden py-5">
  <div className="container py-5">
    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
      {/* <h1 className="display-3 text-capitalize mb-3">Protect Your Family with Best Water</h1> */}
    </div>

    {/* Tab Navigation */}
    <div className="btn-group mb-4 wow wow fadeInLeft" data-wow-delay="0.2s"  role="group">
  <button
    type="button"
    className={`btn btn-secondary ${activeTable === 'table1' ? 'active' : ''}`}
    onClick={() => handleTableToggle('table1')}
  >
    เปรียบเทียบ 3 ปี
  </button>
  <button
    type="button"
    className={`btn btn-secondary ${activeTable === 'table2' ? 'active' : ''}`}
    onClick={() => handleTableToggle('table2')}
  >
    เปรียบเทียบไตรมาส
  </button>
</div>


    {/* Table Start */}
    <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
      <div className="table-responsive">
        {/* Table 1 */}
        {activeTable === 'table1' && (
          <div className="col-12">
          <div className="table-responsive">
          <table className="table custom-table">
  <thead className="table-dark">
    <tr>
    <th>เปรียบเทียบ 3 ปี</th>
                          {threeyear.map((yearData, index) => (
                            <th key={index}>{yearData.year}</th>
                          ))}
    </tr>
  </thead>
  <tbody>
    {/* กลุ่ม 1: ผลการดำเนินงาน */}
    <tr className="table-info">
      <td colSpan="4" className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
        ผลการดำเนินงาน (ล้านบาท)
      </td>
    </tr>
    <tr>
      <td>รายได้จากการขายและบริการ</td>
      <td>{threeyear[0]?.sales_and_services_income}</td>
      <td>{threeyear[1]?.sales_and_services_income}</td>
      <td>{threeyear[2]?.sales_and_services_income}</td>
    </tr>
    <tr>
      <td>รายได้รวม1</td>
      <td>{threeyear[0]?.total_income}</td>
      <td>{threeyear[1]?.total_income}</td>
      <td>{threeyear[2]?.total_income}</td>
    </tr>
    <tr>
      <td>กำไร (ขาดทุน) ขั้นต้น</td>
      <td>{threeyear[0]?.gross_profit}</td>
      <td>{threeyear[1]?.gross_profit}</td>
      <td>{threeyear[2]?.gross_profit}</td>
    </tr>
    <tr>
      <td>กำไรก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคาและ ค่าตัดจำหน่าย</td>
      <td>{threeyear[0]?.ebitda}</td>
      <td>{threeyear[1]?.ebitda}</td>
      <td>{threeyear[2]?.ebitda}</td>
    </tr>
    <tr>
      <td>กำไรก่อนดอกเบี้ยและภาษี</td>
      <td>{threeyear[0]?.ebit}</td>
      <td>{threeyear[1]?.ebit}</td>
      <td>{threeyear[2]?.ebit}</td>
    </tr>
    <tr>
      <td>กำไร (ขาดทุน) สุทธิ2</td>
      <td>{threeyear[0]?.net_profit_loss}</td>
      <td>{threeyear[1]?.net_profit_loss}</td>
      <td>{threeyear[2]?.net_profit_loss}</td>
    </tr>
    {/* กลุ่ม 2: ฐานะทางการเงิน */}
    <tr className="table-info">
      <td colSpan="4" className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
        ฐานะทางการเงิน (ล้านบาท)
      </td>
    </tr>
    <tr>
      <td>สินทรัพย์รวม</td>
      <td>{threeyear[0]?.total_assets}</td>
      <td>{threeyear[1]?.total_assets}</td>
      <td>{threeyear[2]?.total_assets}</td>
    </tr>
    <tr>
      <td>หนี้สินรวม</td>
      <td>{threeyear[0]?.total_liabilities}</td>
      <td>{threeyear[1]?.total_liabilities}</td>
      <td>{threeyear[2]?.total_liabilities}</td>
    </tr>
    <tr>
      <td>ส่วนของผู้ถือหุ้น</td>
      <td>{threeyear[0]?.shareholders_equity}</td>
      <td>{threeyear[1]?.shareholders_equity}</td>
      <td>{threeyear[2]?.shareholders_equity}</td>
    </tr>
    {/* กลุ่ม 3: อัตราส่วนทางการเงิน */}
    <tr className="table-info">
      <td colSpan="4" className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
        อัตราส่วนทางการเงิน
      </td>
    </tr>
    <tr>
      <td>อัตรากำไรขั้นต้น</td>
      <td>{threeyear[0]?.gross_profit_margin}%</td>
      <td>{threeyear[1]?.gross_profit_margin}%</td>
      <td>{threeyear[2]?.gross_profit_margin}%</td>
    </tr>
    <tr>
      <td>กำไรก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคาและ ค่าตัดจำหน่าย</td>
      <td>{threeyear[0]?.ebitda_margin}%</td>
      <td>{threeyear[1]?.ebitda_margin}%</td>
      <td>{threeyear[2]?.ebitda_margin}%</td>
    </tr>
    <tr>
      <td>อัตรากำไรสุทธิ</td>
      <td>{threeyear[0]?.net_profit_margin}%</td>
      <td>{threeyear[1]?.net_profit_margin}%</td>
      <td>{threeyear[2]?.net_profit_margin}%</td>
    </tr>
    <tr>
      <td>อัตราผลตอบแทนจากสินทรัพย์รวม</td>
      <td>{threeyear[0]?.return_on_assets}%</td>
      <td>{threeyear[1]?.return_on_assets}%</td>
      <td>{threeyear[2]?.return_on_assets}%</td>
    </tr>
    <tr>
      <td>อัตราผลตอบแทนจากส่วนของผู้ถือหุ้น</td>
      <td>{threeyear[0]?.return_on_equity}%</td>
      <td>{threeyear[1]?.return_on_equity}%</td>
      <td>{threeyear[2]?.return_on_equity}%</td>
    </tr>
    <tr>
      <td>อัตราส่วนเงินทุนหมุนเวียน</td>
      <td>{threeyear[0]?.dividend_payout_ratio}%</td>
      <td>{threeyear[1]?.dividend_payout_ratio}%</td>
      <td>{threeyear[2]?.dividend_payout_ratio}%</td>
    </tr>
    <tr>
      <td>อัตราส่วนหนี้สินต่อส่วนของผู้ถือหุ้น</td>
      <td>{threeyear[0]?.dividend_yield}%</td>
      <td>{threeyear[1]?.dividend_yield}%</td>
      <td>{threeyear[2]?.dividend_yield}%</td>
    </tr>

    {/* กลุ่ม 4: ข้อมูลต่อหุ้น */}
    <tr className="table-info">
      <td colSpan="4" className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
        ข้อมูลต่อหุ้น (บาท)
      </td>
    </tr>
    <tr>
      <td>มูลค่าที่ตราไว้</td>
      <td>{threeyear[0]?.current_ratio}</td>
      <td>{threeyear[1]?.current_ratio}</td>
      <td>{threeyear[2]?.current_ratio}</td>
    </tr>
    <tr>
      <td>มูลค่าทางบัญชีต่อหุ้น</td>
      <td>{threeyear[0]?.debt_to_equity_ratio}</td>
      <td>{threeyear[1]?.debt_to_equity_ratio}</td>
      <td>{threeyear[2]?.debt_to_equity_ratio}</td>
    </tr>
    <tr>
      <td>กำไรสุทธิต่อหุ้น</td>
      <td>{threeyear[0]?.par_value}</td>
      <td>{threeyear[1]?.par_value}</td>
      <td>{threeyear[2]?.par_value}</td>
    </tr>
    <tr>
      <td>เงินปันผลต่อหุ้น3</td>
      <td>{threeyear[0]?.book_value_per_share}</td>
      <td>{threeyear[1]?.book_value_per_share}</td>
      <td>{threeyear[2]?.book_value_per_share}</td>
    </tr>
    <tr>
      <td>อัตราเงินปันผลต่อกำไรสุทธิต่อหุ้น</td>
      <td>{threeyear[0]?.net_profit_per_share}%</td>
      <td>{threeyear[1]?.net_profit_per_share}%</td>
      <td>{threeyear[2]?.net_profit_per_share}%</td>
    </tr>
    <tr>
      <td>อัตราผลตอบแทนจากเงินปันผล</td>
      <td>{threeyear[0]?.dividend_per_share}%</td>
      <td>{threeyear[1]?.dividend_per_share}%</td>
      <td>{threeyear[2]?.dividend_per_share}%</td>
    </tr>
    <tr className="table-info">
      <td colSpan="4" className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
        ข้อมูลหุ้นของบริษัท (ล้านหุ้น)
      </td>
    </tr>
    <tr>
      <td>จำนวนหุ้นสามัญจดทะเบียน</td>
      <td>{threeyear[0]?.registered_common_shares}</td>
      <td>{threeyear[1]?.registered_common_shares}</td>
      <td>{threeyear[2]?.registered_common_shares}</td>
    </tr>
    <tr>
      <td>จำนวนหุ้นสามัญชำระแล้ว</td>
      <td>{threeyear[0]?.paid_common_shares}</td>
      <td>{threeyear[1]?.paid_common_shares}</td>
      <td>{threeyear[2]?.paid_common_shares}</td>
    </tr>
  </tbody>
</table>


          </div>
        </div>
        )}

        {/* Table 2 */}
        {activeTable === 'table2' && (
  <div className="col-12">
    <div className="table-responsive">
      <table className="table custom-table">
        <thead className="table-dark">
          <tr>
            <th>เปรียบเทียบไตรมาส</th>
            {quarterlyData.map((quarter, index) => (
              <th key={index}>{quarter.quarter}</th>
            ))}
            <th>QoQ % เปลี่ยนแปลง</th>
            <th>YoY % เปลี่ยนแปลง</th>
          </tr>
        </thead>
        <tbody>
          {/* กลุ่ม 1: ผลการดำเนินงาน */}
          <tr className="table-info">
            <td colSpan={quarterlyData.length + 3} className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
              ผลการดำเนินงาน (ล้านบาท)
            </td>
          </tr>
          <tr>
            <td>รายได้จากการขายและบริการ</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.sales_and_services_income}</td>
            ))}
            <td>{quarandyearData[0]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[0]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>รายได้รวม1</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.total_income}</td>
            ))}
            <td>{quarandyearData[1]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[1]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>กำไร (ขาดทุน) ขั้นต้น</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.gross_profit}</td>
            ))}
            <td>{quarandyearData[2]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[2]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>กำไรก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคาและ ค่าตัดจำหน่าย</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.ebitda}</td>
            ))}
            <td>{quarandyearData[3]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[3]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>กำไรก่อนดอกเบี้ยและภาษี</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.ebit}</td>
            ))}
            <td>{quarandyearData[4]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[4]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>กำไร (ขาดทุน) สุทธิ</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.net_profit_loss}</td>
            ))}
            <td>{quarandyearData[5]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[5]?.Ypercent || '-'}%</td>
          </tr>
          <tr className="table-info">
            <td colSpan={quarterlyData.length + 3} className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
            ฐานะทางการเงิน (ล้านบาท)
            </td>
          </tr>
          <tr>
            <td>สินทรัพย์รวม</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.total_assets}</td>
            ))}
            <td>{quarandyearData[6]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[6]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>หนี้สินรวม</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.total_liabilities}</td>
            ))}
            <td>{quarandyearData[7]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[7]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>ส่วนของผู้ถือหุ้น</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.shareholders_equity}</td>
            ))}
            <td>{quarandyearData[8]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[8]?.Ypercent || '-'}%</td>
          </tr>
          <tr className="table-info">
            <td colSpan={quarterlyData.length + 3} className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
            อัตราส่วนทางการเงิน
            </td>
          </tr>
          <tr>
            <td>อัตรากำไรขั้นต้น</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.gross_profit_margin}%</td>
            ))}
            <td>{quarandyearData[9]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[9]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>กำไรก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคาและ ค่าตัดจำหน่าย</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.ebitda_margin}%</td>
            ))}
            <td>{quarandyearData[10]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[10]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>อัตรากำไรสุทธิ</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.net_profit_margin}%</td>
            ))}
            <td>{quarandyearData[11]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[11]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>อัตราผลตอบแทนจากสินทรัพย์รวม</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.return_on_assets}%</td>
            ))}
            <td>{quarandyearData[12]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[12]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>อัตราผลตอบแทนจากส่วนของผู้ถือหุ้น</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.return_on_equity}%</td>
            ))}
            <td>{quarandyearData[13]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[13]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>อัตราส่วนเงินทุนหมุนเวียน</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.current_ratio}</td>
            ))}
            <td>{quarandyearData[14]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[14]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>อัตราส่วนหนี้สินต่อส่วนของผู้ถือหุ้น</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.debt_to_equity_ratio}</td>
            ))}
            <td>{quarandyearData[15]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[15]?.Ypercent || '-'}%</td>
          </tr>
          <tr className="table-info">
            <td colSpan={quarterlyData.length + 3} className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
            ข้อมูลต่อหุ้น (บาท)
            </td>
          </tr>
          <tr>
            <td>มูลค่าที่ตราไว้</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.par_value}</td>
            ))}
            <td>{quarandyearData[16]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[16]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>มูลค่าทางบัญชีต่อหุ้น</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.book_value_per_share}</td>
            ))}
            <td>{quarandyearData[17]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[17]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>กำไรสุทธิต่อหุ้น</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.net_profit_per_share}</td>
            ))}
            <td>{quarandyearData[18]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[18]?.Ypercent || '-'}%</td>
          </tr>
          <tr className="table-info">
            <td colSpan={quarterlyData.length + 3} className="text-center" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
            ข้อมูลหุ้นของบริษัท (ล้านหุ้น)
            </td>
          </tr>
          <tr>
            <td>จำนวนหุ้นสามัญจดทะเบียน</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.registered_common_shares}</td>
            ))}
            <td>{quarandyearData[19]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[19]?.Ypercent || '-'}%</td>
          </tr>
          <tr>
            <td>จำนวนหุ้นสามัญชำระแล้ว</td>
            {quarterlyData.map((quarter, index) => (
              <td key={index}>{quarter.paid_common_shares}</td>
            ))}
            <td>{quarandyearData[20]?.Qpercent || '-'}%</td>
            <td>{quarandyearData[20]?.Ypercent || '-'}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}
      </div>
    </div>
  </div>
</div>

  </div>


  )
}

export default Index
