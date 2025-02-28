import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../../../../Components/Menu/menu";
import "./share1.css";

function Index() {
  const [shareholders, setShareholders] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลจาก API
    axios
      .get(process.env.REACT_APP_API_KEY+"/api/holders") // URL ของ API
      .then((response) => {
        setShareholders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Menu />

      {/* Header Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/14.png)`,
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
              Shareholder Structure
            </h1>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="container-fluid bg-white py-5">
        <div className="container mt-5">
          <h4 className="text-center mb-4">
          Top 10 Shareholders (Book Close 15/03/2024)
          </h4>
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <thead className="table-primary">
                <tr className="text-center">
                  <th>order</th>
                  <th>shareholder</th>
                  <th>Number of Shares</th>
                  <th>% of total shares</th>
                </tr>
              </thead>
              <tbody>
                {shareholders.map((shareholder, index) => (
                  <tr key={shareholder.id}>
                    <td>{index + 1}</td>
                    <td>{shareholder.holder_name_en}</td>
                    <td>{shareholder.shares_count.toLocaleString()}</td>
                    <td>{shareholder.share_percentage}%</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="table-warning">
                  <td colSpan="2" className="text-end fw-bold">combine</td>
                  <td>
                    {shareholders
                      .reduce((sum, item) => sum + (item.shares_count || 0), 0)
                      .toLocaleString()}
                  </td>
                  <td>
                    {shareholders
                      .reduce((sum, item) => sum + (parseFloat(item.share_percentage) || 0), 0)
                      .toFixed(2)}
                    %
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
