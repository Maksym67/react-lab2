import React from "react";
import "./index.css"
import Card from "./card";
import CardBtnImg1 from "./img/cards-bottom/1.jpg"
import CardTopImg1 from "./img/cards-top/1.gif"

function MainPart() {
    const cards = [
        {
            headline1: "Headline Text",
            image1: CardTopImg1,
            description1: <span>Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.<br/><br/>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</span>,
            link1: "http://www.google.com",

            headline2: "Headline Text",
            image2: CardTopImg1,
            description2: <span>Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.<br/><br/>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</span>,
            link2: "http://www.google.com",

            headline3: "Headline Text",
            image3: CardTopImg1,
            description3: <span>Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.<br/><br/>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</span>,
            link3: "http://www.google.com",

            headline4: "Headline Text",
            image4: CardTopImg1,
            description4: <span>Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.<br/><br/>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</span>,
            link4: "http://www.google.com",
        }
    ]

    return (
        <div className="main-part">
            <div className="cards">
                {
                    cards.map(
                        function(el) {
                            return (
                                <div className="grid-class">
                                    <Card headline={el.headline1} image={el.image1} description={el.description1} link={el.link1}/>
                                    <Card headline={el.headline2} image={el.image2} description={el.description2} link={el.link2}/>
                                    <Card headline={el.headline3} image={el.image3} description={el.description3} link={el.link3}/>
                                    <Card headline={el.headline4} image={el.image4} description={el.description4} link={el.link4}/>
                                </div>
                            )
                        }
                    )
                }
            </div>
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