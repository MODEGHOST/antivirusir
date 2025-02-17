import React, { useEffect, useState } from 'react';
import Menu from '../../../Components/Menu/menu';
import './P1.css';
import axios from 'axios';

function Index() {
  const [activeTable, setActiveTable] = useState('table1');
  const [threeyear, setThreeyearData] = useState([]); // State สำหรับเลือกตารางที่แสดง
  const [quarterlyData, setQuarterlyData] = useState([]);
  const [quarandyearData, setQuarandyearData] = useState([]);
  const [comments, setComments] = useState({});


  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/threeyear/all")
      .then((response) => {
        let data = response.data.data; // ดึงข้อมูลหลัก
        let comments = response.data.comments; // ดึง comments จาก API
  
        // เรียงข้อมูลจากปีใหม่ไปปีเก่าและเลือกเฉพาะ 3 ปีล่าสุด
        data.sort((a, b) => b.year - a.year);
        setThreeyearData(data.slice(0, 3)); // เก็บข้อมูล 3 ปีล่าสุดใน state
        setComments(comments); // เก็บ comments ใน state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  

  useEffect(() => {
    // ดึงข้อมูลจาก API สำหรับ Quarterly
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/quarterly/all") // ปรับ URL ให้ตรงกับ API ของ quarterly
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
      .get(process.env.REACT_APP_API_KEY + "/api/quarandyear/all")
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
        <div className="container-fluid py-5 sticky-service" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/16.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center',height: '45vh' }}>
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
                            <th className="text-end"key={index}>{yearData.year}</th>
                          ))}
    </tr>
  </thead>
  <tbody>
  {/* กลุ่ม 1: ผลการดำเนินงาน */}
  <tr className="table-info">
    <td colSpan="4" className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
      ผลการดำเนินงาน (ล้านบาท)
    </td>
  </tr>
  {[
    { label: comments?.sales_and_services_income, key: "sales_and_services_income" },
    { label: comments?.total_income, key: "total_income" },
    { label: comments?.gross_profit, key: "gross_profit" },
    { label: comments?.ebitda, key: "ebitda" },
    { label: comments?.ebit, key: "ebit" },
    { label: comments?.net_profit_loss, key: "net_profit_loss" }
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-start">{item.label}</td>
      <td className="text-end">{Number(threeyear[0]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      <td className="text-end">{Number(threeyear[1]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      <td className="text-end">{Number(threeyear[2]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
    </tr>
  ))}

  {/* กลุ่ม 2: ฐานะทางการเงิน */}
  <tr className="table-info">
    <td colSpan="4" className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
      ฐานะทางการเงิน (ล้านบาท)
    </td>
  </tr>
  {[
    { label: comments?.total_assets, key: "total_assets" },
    { label: comments?.total_liabilities, key: "total_liabilities" },
    { label: comments?.shareholders_equity, key: "shareholders_equity" }
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-start">{item.label}</td>
      <td className="text-end">{Number(threeyear[0]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      <td className="text-end">{Number(threeyear[1]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      <td className="text-end">{Number(threeyear[2]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
    </tr>
  ))}

  {/* กลุ่ม 3: อัตราส่วนทางการเงิน */}
  <tr className="table-info">
    <td colSpan="4" className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
      อัตราส่วนทางการเงิน
    </td>
  </tr>
  {[
    { label: comments?.gross_profit_margin, key: "gross_profit_margin" },
    { label: comments?.ebitda_margin, key: "ebitda_margin" },
    { label: comments?.net_profit_margin, key: "net_profit_margin" },
    { label: comments?.return_on_assets, key: "return_on_assets" },
    { label: comments?.return_on_equity, key: "return_on_equity" },
    { label: comments?.dividend_payout_ratio, key: "dividend_payout_ratio" },
    { label: comments?.dividend_yield, key: "dividend_yield" }
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-start">{item.label}</td>
      <td className="text-end">{Number(threeyear[0]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
      <td className="text-end">{Number(threeyear[1]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
      <td className="text-end">{Number(threeyear[2]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
    </tr>
  ))}

  {/* กลุ่ม 4: ข้อมูลต่อหุ้น */}
  <tr className="table-info">
  <td colSpan="4" className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
    ข้อมูลต่อหุ้น (บาท)
  </td>
</tr>
{[
  { label: comments?.current_ratio, key: "current_ratio" },
  { label: comments?.debt_to_equity_ratio, key: "debt_to_equity_ratio" },
  { label: comments?.par_value, key: "par_value" },
  { label: comments?.book_value_per_share, key: "book_value_per_share" },
  { label: comments?.net_profit_per_share, key: "net_profit_per_share", isPercentage: true },
  { label: comments?.dividend_per_share, key: "dividend_per_share", isPercentage: true }
].map((item, index) => (
  <tr key={index}>
    <td className="text-start">{item.label}</td>
    <td className="text-end">
      {Number(threeyear[0]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.isPercentage ? "%" : ""}
    </td>
    <td className="text-end">
      {Number(threeyear[1]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.isPercentage ? "%" : ""}
    </td>
    <td className="text-end">
      {Number(threeyear[2]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.isPercentage ? "%" : ""}
    </td>
  </tr>
))}


  {/* กลุ่ม 5: ข้อมูลหุ้นของบริษัท (ล้านหุ้น) */}
  <tr className="table-info">
    <td colSpan="4" className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
      ข้อมูลหุ้นของบริษัท (ล้านหุ้น)
    </td>
  </tr>
  {[
    { label: comments?.registered_common_shares, key: "registered_common_shares" },
    { label: comments?.paid_common_shares, key: "paid_common_shares" }
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-start">{item.label}</td>
      <td className="text-end">{Number(threeyear[0]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      <td className="text-end">{Number(threeyear[1]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      <td className="text-end">{Number(threeyear[2]?.[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
    </tr>
  ))}
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
            <th className='text-center'>เปรียบเทียบไตรมาส</th>
            {quarterlyData.map((quarter, index) => (
              <th key={index} className='text-end'>{quarter.quarter}</th>
            ))}
            <th className='text-end'>QoQ % เปลี่ยนแปลง</th>
            <th className='text-end'>YoY % เปลี่ยนแปลง</th>
          </tr>
        </thead>
        <tbody>
  {/* กลุ่ม 1: ผลการดำเนินงาน */}
  <tr className="table-info">
    <td colSpan={quarterlyData.length + 3} className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
      ผลการดำเนินงาน (ล้านบาท)
    </td>
  </tr>
  {[
    { label: "รายได้จากการขายและบริการ", key: "sales_and_services_income" },
    { label: "รายได้รวม", key: "total_income" },
    { label: "กำไร (ขาดทุน) ขั้นต้น", key: "gross_profit" },
    { label: "กำไรก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคาและ ค่าตัดจำหน่าย", key: "ebitda" },
    { label: "กำไรก่อนดอกเบี้ยและภาษี", key: "ebit" },
    { label: "กำไร (ขาดทุน) สุทธิ", key: "net_profit_loss" }
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-start">{item.label}</td>
      {quarterlyData.map((quarter, qIndex) => (
        <td key={qIndex} className="text-end">
          {Number(quarter[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </td>
      ))}
      <td className="text-end">{Number(quarandyearData[index]?.Qpercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
      <td className="text-end">{Number(quarandyearData[index]?.Ypercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
    </tr>
  ))}

  {/* กลุ่ม 2: ฐานะทางการเงิน */}
  <tr className="table-info">
    <td colSpan={quarterlyData.length + 3} className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
      ฐานะทางการเงิน (ล้านบาท)
    </td>
  </tr>
  {[
    { label: "สินทรัพย์รวม", key: "total_assets" },
    { label: "หนี้สินรวม", key: "total_liabilities" },
    { label: "ส่วนของผู้ถือหุ้น", key: "shareholders_equity" }
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-start">{item.label}</td>
      {quarterlyData.map((quarter, qIndex) => (
        <td key={qIndex} className="text-end">
          {Number(quarter[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </td>
      ))}
      <td className="text-end">{Number(quarandyearData[index + 6]?.Qpercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
      <td className="text-end">{Number(quarandyearData[index + 6]?.Ypercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
    </tr>
  ))}

  {/* กลุ่ม 3: อัตราส่วนทางการเงิน */}
  <tr className="table-info">
    <td colSpan={quarterlyData.length + 3} className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
      อัตราส่วนทางการเงิน
    </td>
  </tr>
  {[
    { label: "อัตรากำไรขั้นต้น", key: "gross_profit_margin" },
    { label: "กำไรก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคาและ ค่าตัดจำหน่าย", key: "ebitda_margin" },
    { label: "อัตรากำไรสุทธิ", key: "net_profit_margin" },
    { label: "อัตราผลตอบแทนจากสินทรัพย์รวม", key: "return_on_assets" },
    { label: "อัตราผลตอบแทนจากส่วนของผู้ถือหุ้น", key: "return_on_equity" },
{ label: "อัตราส่วนเงินทุนหมุนเวียน", key: "current_ratio" },
{ label: "อัตราส่วนหนี้สินต่อส่วนของผู้ถือหุ้น", key: "debt_to_equity_ratio" }
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-start">{item.label}</td>
      {quarterlyData.map((quarter, qIndex) => (
        <td key={qIndex} className="text-end">
          {Number(quarter[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
        </td>
      ))}
      <td className="text-end">{Number(quarandyearData[index + 9]?.Qpercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
      <td className="text-end">{Number(quarandyearData[index + 9]?.Ypercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
    </tr>
  ))}
 {/* กลุ่ม 4: ข้อมูลต่อหุ้น (บาท) */}
  <tr className="table-info">
    <td colSpan={quarterlyData.length + 3} className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
      ข้อมูลต่อหุ้น (บาท)
    </td>
  </tr>
  {[
    { label: "มูลค่าที่ตราไว้", key: "par_value" },
    { label: "มูลค่าทางบัญชีต่อหุ้น", key: "book_value_per_share" },
{ label: "กำไรสุทธิต่อหุ้น", key: "net_profit_per_share" }
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-start">{item.label}</td>
      {quarterlyData.map((quarter, qIndex) => (
        <td key={qIndex} className="text-end">
          {Number(quarter[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </td>
      ))}
      <td className="text-end">{Number(quarandyearData[index + 19]?.Qpercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
      <td className="text-end">{Number(quarandyearData[index + 19]?.Ypercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
    </tr>
  ))}
  {/* กลุ่ม 5: ข้อมูลหุ้นของบริษัท */}
  <tr className="table-info">
    <td colSpan={quarterlyData.length + 3} className="text-start" style={{ borderRadius: "30px", border: "1px solid #ddd" }}>
      ข้อมูลหุ้นของบริษัท (ล้านหุ้น)
    </td>
  </tr>
  {[
    { label: "จำนวนหุ้นสามัญจดทะเบียน", key: "registered_common_shares" },
    { label: "จำนวนหุ้นสามัญชำระแล้ว", key: "paid_common_shares" }
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-start">{item.label}</td>
      {quarterlyData.map((quarter, qIndex) => (
        <td key={qIndex} className="text-end">
          {Number(quarter[item.key] || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </td>
      ))}
      <td className="text-end">{Number(quarandyearData[index + 19]?.Qpercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
      <td className="text-end">{Number(quarandyearData[index + 19]?.Ypercent || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</td>
    </tr>
  ))}
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
