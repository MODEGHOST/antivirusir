// calculator.js

export const calculateResults = (data) => {
    // คำนวณกำไรจากการซื้อขายหุ้น
    const profit = (data.priceSold - data.pricePurchase) * data.sharesHeld;
  
    // คำนวณค่าคอมมิชชั่น
    const totalCommission = Math.max(
      (data.pricePurchase * data.sharesHeld * data.commissionRate) / 100,
      data.minCommission
    ) + Math.max(
      (data.priceSold * data.sharesHeld * data.commissionRate) / 100,
      data.minCommission
    );
  
    // คำนวณ VAT จากค่าคอมมิชชั่น
    const vat = totalCommission * (data.vatRate / 100);
  
    // คำนวณกำไรสุทธิ
    const netProfit = profit - totalCommission - vat;
  
    // การเปลี่ยนแปลงการลงทุนเป็นเปอร์เซ็นต์
    const investChangePercent = ((data.priceSold - data.pricePurchase) / data.pricePurchase) * 100;
  
    // คำนวณเงินปันผลสุทธิ
    const netDividend = data.dividendTaxed + data.dividendExempt;
  
    // ผลลัพธ์สุดท้าย
    return {
      profit,
      commission: totalCommission,
      vat,
      netProfit,
      investChangePercent: investChangePercent.toFixed(2),
      netDividend,
    };
  };
  
  export const formatNumber = (number) => {
    // ฟังก์ชันสำหรับจัดรูปแบบตัวเลขเป็นสกุลเงินไทย
    return new Intl.NumberFormat('th-TH', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };
  