import React, { Component } from "react";

class Product_format extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p className="T_about_product_words">
        【紙膠帶注意事項】 <br />
        因膠可能會損壞物品表面，請在黏貼前先作重複黏貼的測試
        ‧可使用有機溶劑清理物品表面的殘膠 ‧請勿黏貼於貴重物品
        ‧建議使用鉛筆或油性筆書寫 【退換貨須知】
        購買前請確實瞭解退換貨說明，以保障您的權益。 購物說明頁面
        http://www.pcstore.com.tw/balagogo/HM/payinfo.htm
      </p>
    );
  }
}

export default Product_format;
