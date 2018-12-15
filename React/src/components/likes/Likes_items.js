import React, { Component } from 'react';


class Likes_items extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                {this.props.likes.map(likes =>
                    <tr>
                        <td>{likes.sid}</td>
                        <td>
                            <figure className="K_product_pic_l">
                                <img src="images/musicbell.jpg" alt="音樂鈴" />
                            </figure>
                        </td>
                        <td>
                            <h3>繞圈音樂鈴/DN米奇米妮</h3>
                            <p>材質:木/樹脂/鐵/鋼/塑膠</p>
                            <p>尺寸:12.7X12.7X14.5CM</p>
                        </td>
                        <td>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </td>
                        <td>$1,680</td>
                        <td>$1,280</td>
                        <td>$1,280</td>
                        <td><img className="K_table_icon" src="images/cart.svg" alt="icon_cancel" /></td>
                        <td><img className="K_table_icon" src="images/cancel.svg" alt="icon_cancel" /></td>
                    </tr>
                )}
            </React.Fragment>
        )
    }
    addOption (){
        let select = document.getElementsByClassName("addOption"),
            option = document.createElement("option")
        option.appendChild(document.createTextNode("1"));
        select.appendChild(option);
    }
}


export default Likes_items;