import React from 'react';
import Menu from "../../../../Components/MenuEn/menu";

function Index() {
  return (
    <div>
      <Menu />
      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/15.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
        }}
      >
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1
              className="display-4 text-capitalize mb-3"
              style={{ color: "white", marginTop: "30px" }}
            >
              Non-payment of facilities and non-employment of government employees.
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-fluid my-5" style={{backgroundColor:"white",padding:"20px"}}>
        <div className="content">
          <h2 className="mb-4">meaning</h2>
          <p>
            <strong>1.Facilitation Payments:</strong> It refers to expenses paid to government officials informally and is only given to ensure that government officials will carry out the process or to encourage faster action. The process does not require the discretion of the government official and is a legitimate act of the government official, as well as a right that the juristic person should already have according to the law, such as applying for a license. Applying for certificates and receiving public services, etc.
          </p>
          <p>
            <strong>2. Government Officials/Government Employees:</strong> It means a person who is or has been a government official/politician/consultant of a government agency and has worked for the company and may rely on relationships or inside information to benefit the company or cause a conflict of interest in the performance of the duties of a government agency or organization. The result of the action is to gain an unfair business advantage or to impose favorable policies on the company for which the former government official works.
          </p>

          <h2 className="mt-5 mb-4">Guidelines</h2>
          <ul>
            <li>
            The Company does not have a policy of paying facilitation fees in any form, either directly or indirectly, and will not take any action and will not accept any action in exchange for facilitating business operations.
            </li>
            <li>
            The Company does not have a policy to hire government officials who are still in positions to work in the organization, which may cause conflicts of interest and abuse of power.
            </li>
            <li>
            The Company does not send employees/executives/directors/consultants who work with the Company to work with government agencies to cause conflicts of interest and abuse of power.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
