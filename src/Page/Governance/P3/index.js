import React from 'react';
import Menu from '../../../Components/Menu/menu';

function Index() {
  return (
    <div>
      <Menu />
      {/* Hero Section */}
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
              className="display-4 text-capitalize mb-3"
              style={{ color: "white", marginTop: "30px" }}
            >
              การไม่จ่ายค่าอํานวยความสะดวกและการไม่ว่าจ้างพนักงานรัฐ
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container my-5">
        <div className="content">
          <h2 className="mb-4">คำนิยาม</h2>
          <p>
            <strong>1. ค่าอํานวยความสะดวก (Facilitation Payments):</strong> หมายถึง ค่าใช้จ่ายที่จ่ายแก่เจ้าหน้าที่ของรัฐอย่างไม่เป็นทางการ และเป็นการให้เพียงเพื่อให้มั่นใจว่าเจ้าหน้าที่ของรัฐจะดําเนินการตามกระบวนการ หรือเป็นการกระตุ้นให้ดําเนินการรวดเร็วขึ้น โดยกระบวนการนั้นไม่ต้องอาศัยดุลพินิจของเจ้าหน้าที่รัฐ และเป็นการกระทําอันชอบด้วยหน้าที่ของเจ้าหน้าที่ของรัฐผู้นั้น รวมทั้งเป็นสิทธิที่นิติบุคคลพึงจะได้ตามกฎหมายอยู่แล้ว เช่น การขอใบอนุญาต การขอหนังสือรับรอง และการได้รับการบริการสาธารณะ เป็นต้น
          </p>
          <p>
            <strong>2. เจ้าหน้าที่รัฐ/พนักงานรัฐ:</strong> หมายถึง การที่บุคคลผู้เป็นหรือเคยเป็นเจ้าหน้าที่ของรัฐ/นักการเมือง/ที่ปรึกษาของหน่วยงานรัฐ และได้เข้ามาทํางานให้กับบริษัท และอาจอาศัยความสัมพันธ์หรือข้อมูลภายในไปเอื้อประโยชน์แก่บริษัทหรือก่อให้เกิดภาวะความขัดแย้งทางผลประโยชน์ของการปฏิบัติหน้าที่ของหน่วยงานของรัฐหรือองค์กร โดยผลของการกระทํานั้นมุ่งหวังให้เกิดความได้เปรียบทางธุรกิจที่ไม่เป็นธรรม หรือการกําหนดนโยบายเอื้อประโยชน์กับบริษัทที่อดีตเจ้าหน้าที่ของรัฐนั้นทํางานให้
          </p>

          <h2 className="mt-5 mb-4">แนวการปฏิบัติ</h2>
          <ul>
            <li>
              บริษัทฯ ไม่มีนโยบายจ่ายเงินค่าอํานวยความสะดวกในรูปแบบใดๆ ทั้งทางตรงและทางอ้อม โดยจะไม่ดําเนินการใดๆ และไม่ยอมรับการกระทําใด ๆ เพื่อแลกกับการอํานวยความสะดวกในการดําเนินธุรกิจ
            </li>
            <li>
              บริษัทฯ ไม่มีนโยบายในการว่าจ้างเจ้าหน้าที่รัฐที่ยังอยู่ในตำแหน่งเข้ามาปฏิบัติงานในองค์กรซึ่งอาจก่อให้เกิดความขัดแย้งทางผลประโยชน์และการใช้อำนาจในทางมิชอบ
            </li>
            <li>
              บริษัทฯ ไม่มีการส่งพนักงาน/ผู้บริหาร/กรรมการ/ที่ปรึกษาที่ทำงานกับทางบริษัทไปทำงานกับหน่วยงานของรัฐเพื่อก่อให้เกิดความขัดแย้งทางผลประโยชน์และการใช้อำนาจในทางมิชอบ
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
