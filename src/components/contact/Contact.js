import React, { Component } from 'react';
import './Contact.scss';
import Contact_banner from './Contact_banner';
import $ from 'jquery';


class Contact extends Component {
    constructor(props) {
        super(props)
        this.contactClick = this.contactClick.bind(this);

    }
    // 此function會被子元件呼叫
    // 子元件回傳值給function的item參數
    contactClick(item) {
        alert(item);
    }

    render() {

        return (
            <React.Fragment>
                <Contact_banner/>
                <div class="F_container_contact">
                    <div class="F_left_contact">
                        <h3>歡迎來信</h3>
                        <div class="F_left_contact_opacity">Contact us</div>
                        <p className="F_text_conact_long">If you have any question about us,<br/> Don`t hestitate to contact us !</p>
                        <p className="F_text_conact_short">
                            服務時間：8:00~19:00
                <br />客服電話：02-2917-1700
                <br /> Jeancard@gmail.com
            </p>
                        <div class="F_contact_icon_box">
                            <div class="F_color_contact_icon">
                                <img src="images/content_icon/LINE_color.svg" alt="LINE" />
                            </div>
                            <div class="F_color_contact_icon">
                                <img src="images/content_icon/FB_color.svg" alt="FB" />
                            </div>
                            <div class="F_color_contact_icon">
                                <img src="images/content_icon/IG_color.svg" alt="IG" />
                            </div>
                        </div>
                    </div>
                    <div class="F_right_contact">
                    <div class="F_mail_pic"><img src="images/content_icon/mail.svg" alt="信件" /></div>
                        <div class="F_mail_box">
                            <label for="name" class="F_contact_label F_contact_name">姓名</label>
                            <input type="text" name="name" id="F_name_contact" class="F_input_contact F_name_contact_input" />
                            <label for="name" class="F_contact_label contact_email">電子郵件</label>
                            <input type="text" name="email" id="F_email_contact" class="F_input_contact F_email_contact_input" />
                            <label for="name" class="F_contact_label contact_phone">連絡電話</label>
                            <input type="text" name="phone" id="F_phone_contact" class="F_input_contact F_phone_contact_input" />
                            <label for="name" class="F_contact_label F_contact_contact">輸入內容</label>
                            <textarea  rows="8" type="text" name="contact" id="F_contact_contact" class="F_input_contact F_contact_contact_input" />
                        </div>              
                        <div class="F_button_box_contact">
                            <div class="F_contact_btn F_clean">重新填寫</div>
                            <div class="F_contact_btn F_post_contact">確認送出</div>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}

export default Contact;