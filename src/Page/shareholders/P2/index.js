import React from "react";
import Menu from "../../../Components/Menu/menu";
import "./share1.css";

function index() {
  return (
    <div>
      <Menu />

      {/* Header Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
        }}
      >
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1
              className="display-3 text-capitalize mb-3"
              style={{ color: "white", marginTop: "60px" }}
            >
              โครงสร้างผู้ถือหุ้น
            </h1>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="container-fluid bg-white py-5">
        <div className="container mt-5">
          <h4 className="text-center mb-4">
            ผู้ถือหุ้น 10 อันดับแรก (ปิดสมุด 15/03/2567)
          </h4>
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <thead className="table-primary">
                <tr className="text-center">
                  <th>ลำดับ</th>
                  <th>ผู้ถือหุ้น</th>
                  <th>จำนวนหุ้น</th>
                  <th>% ของจำนวนหุ้นทั้งหมด</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ดร.ปราเสนี เหลืองโชติ</td>
                  <td>140,955,087</td>
                  <td>20.96%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>นายวุฒิชัย เหลืองโชติ</td>
                  <td>108,123,227</td>
                  <td>16.07%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>นางสาวเก้าใจ เหลืองโชติ</td>
                  <td>104,650,741</td>
                  <td>15.56%</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>นายสมพงษ์ เหลืองโชติ</td>
                  <td>72,420,907</td>
                  <td>10.77%</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>BANK OF SINGAPORE LIMITED</td>
                  <td>30,283,341</td>
                  <td>4.50%</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>นายพัฒนศร เหลืองโชติ</td>
                  <td>28,512,562</td>
                  <td>4.24%</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>นายกรชวุฒิ เหลืองโชติ</td>
                  <td>20,724,528</td>
                  <td>3.08%</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>นายจวิศวร์ เหลืองโชติ</td>
                  <td>18,280,760</td>
                  <td>2.72%</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>บริษัทหลักทรัพย์ ฟิลลิป จำกัด</td>
                  <td>11,880,000</td>
                  <td>1.77%</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>นายสาวอุไรวรรณ แซ่แต้</td>
                  <td>11,000,000</td>
                  <td>1.64%</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="table-warning">
                  <td colSpan="2" className="text-end fw-bold">รวม</td>
                  <td>546,831,153</td>
                  <td>81.30%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
