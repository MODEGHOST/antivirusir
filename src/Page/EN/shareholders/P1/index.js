import React from "react";
import Menu from "../../../../Components/Menu/menu";
import "./share.css";

function Index() {
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
              Investment Basics
            </h1>
          </div>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="container-fluid my-5" style={{ backgroundColor: "white", padding: "20px" }}>
  <h2 className="text-center mb-4">Company Information</h2>
  <div className="row">
    {/* General Information Card */}
    <div className="col-md-6">
      <div
        className="card mb-4"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h5>General information</h5>
        <p>
          <strong>Thai Rung Union Car Public Company Limited</strong>
        </p>
        <p>Company Registration Number: 0107536001435</p>
        <p>Registered Capital: 682,642,653 Baht</p>
        <p>Capital paid: 672,899,058 Baht</p>
        <p>
          <strong>Nature of Business:</strong>
        </p>
        <ul>
          <li>Product Design, Research & Development</li>
          <li>Create molds and fixtures for production.</li>
          <li>Manufacture of metal and plastic parts and manufacture of car seats.</li>
          <li>Painting contractor, assembling and modifying various cars.</li>
        </ul>
      </div>

      {/* Dividend Policy Card */}
      <div
        className="card mb-4"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h5>Dividend Policy and Payment</h5>
        <p>
          <strong>TRU's Dividend Policy and History</strong>
        </p>
        <p>
        The company has a dividend payment policy. At the rate of approximately 40% of the net profit after tax each year of the consolidated financial statements.
It will be paid in the following year. However, the consideration of such dividend payment will depend on the cash flow and investment burden of the Company and its affiliates.
including other necessary and appropriate in the future.
        </p>
        <p>
          <strong>Company Dividend Payment History:</strong>{" "}
          <a href="#download" style={{ textDecoration: "underline" }}>
            DOWNLOAD
          </a>
        </p>
        <p>
          <strong>Announcement of the Company's Dividend Payment:</strong>{" "}
          <a href="#download" style={{ textDecoration: "underline" }}>
            DOWNLOAD
          </a>
        </p>
      </div>
    </div>

    {/* Contact Information and Auditors Card */}
    <div className="col-md-6">
      <div
        className="card mb-4"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h5>Contact Information</h5>
        <p>
          <strong>Location:</strong>
        </p>
        <p>
        304 Macharoen Road Nong Kaeng Phlu, Nong Khaem, Bangkok 10160
        </p>
        <p>Phone: 0-2431-0071-2, 0-2431-0065, 0-2420-0076</p>
        <p>Fax: 0-2812-0844, 0-2814-5030, 0-2420-3664</p>
        <p>
          Website:{" "}
          <a
            href="http://www.thairung.co.th"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.thairung.co.th
          </a>
        </p>
      </div>

      <div
        className="card mb-4"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h5>Auditor and Registrar of Securities</h5>
        <p>
          <strong>Securities Registrar:</strong>
        </p>
        <p>Thailand Securities Depository Co., Ltd.</p>
        <p>Phone: 0-2009-9000</p>
        <p>Fax: 0-2009-9991</p>
        <p>
          <strong>auditor:</strong>
        </p>
        <ul>
          <li>Mr. Athipong Athipongsakul</li>
          <li>Mr. Wichai Ruchitanon</li>
          <li>Mr. Sathian Wongsanan</li>
          <li>Ms. Kulthida Pasurakul</li>
          <li>Ms. Patcharee Siriwongsilp</li>
          <li>Ms. Achara Suknai Bai Boon</li>
        </ul>
        <p>
          <strong>ANS Audit Limit:</strong>
        </p>
        <p>100/72 22nd Floor, 100/2 Vongvanich B Building, Rama 9 Road</p>
        <p>Phone: 0-2645-0109</p>
        <p>Bulletin: 0-2645-0110</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Index;
