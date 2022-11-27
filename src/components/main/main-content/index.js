import React from "react";
import "./index.css"
import CardBtnImg1 from "./img/cards-btn/1.jpg"

function MainPart() {
    return (
        <div className="main-part">
            <div className="cards"></div>
            <hr className="divider"/>
            <div className="cards-bottom">
                <div className="card-btn card-btn-divide">
                    <div className="card-btn-text pad">
                        <span className="card-btn-text-title">
                            Headline Text
                        </span>
                        <span className="card-btn-text-desc">
                            Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.<br/><br/>
                            Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.<br/><br/>
                            Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus.<br/><br/>
                        </span>
                    </div>
                    <img className="card-btn-img img1" src={CardBtnImg1}/>
                </div>
                <div className="card-btn">
                    <img className="card-btn-img" src={CardBtnImg1}/>
                    <div className="card-btn-text" style={{ paddingLeft: '5%' }}>
                        <span className="card-btn-text-title">
                            Headline Text
                        </span>
                        <span className="card-btn-text-desc">
                            Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.<br/><br/>
                            Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.<br/><br/>
                            Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus.<br/><br/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPart;