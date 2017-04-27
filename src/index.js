var React = require("react");
var ReactDOM = require("react-dom");
require("./style/style.css");
import Slider from "./components/Slider";
var propsObj = {
    items: [
        {
            src: require("./images/1.jpg"),
            alt: "img1"
        },
        {
            src: require("./images/2.jpg"),
            alt: "img2"
        },
        {
            src: require("./images/3.jpg"),
            alt: "img3"
        },
        {
            src: require("./images/4.jpg"),
            alt: "img4"
        }
    ],
    dots: true,
    arrow: true,
    interval: 2000
};

ReactDOM.render(<Slider {...propsObj}/>, document.querySelector("#container"));