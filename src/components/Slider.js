var React = require("react");
import SlideArrow from "./SliderArrow";
import SlideDots from "./SliderDots";
var imgUrl = require("../images/1.jpg");

var $ = require("jquery");

export  default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0
        }
    }

    go(n) {
        var len = this.props.items.length;
        var _n = this.state.nowLocal + n;
        if (_n === len + 1) {
            this.$bannerInner.css({
                left: 0
            });
            _n = 1;
        }
        if (_n < 0) {
            this.$bannerInner.css({
                left: -3200
            });
            _n =  len -1;
        }
        this.$bannerInner.animate({
            left: -800 * _n
        }, 500);
        this.setState({
            nowLocal: _n
        });


    }

    handleMouseover() {
        clearInterval(this.autopalyFlag);
    }

    handleMouseout() {
        this.autoPlay();
    }

    autoPlay() {
        clearInterval(this.autopalyFlag);
        this.autopalyFlag = window.setInterval(() => {
            this.go(1);
        }, this.props.interval);
    }

    componentDidMount() {
        var $bannerInner = $(".bannerInner");
        this.$bannerInner = $bannerInner;
        this.autoPlay();
    }

    render() {
        var count = this.props.items.length;
        var arrowNode = this.props.arrow ? <SlideArrow  turn={this.go.bind(this)}/> : null;

        var dotsNodes = this.props.dots ? <SlideDots count={count} turn={this.go.bind(this)} nowLocal={this.state.nowLocal}/> : null;


        return (
            <div className="banner" onMouseOver={this.handleMouseover.bind(this)}
                 onMouseOut={this.handleMouseout.bind(this)}>
                <div className="bannerInner">
                    {
                        this.props.items.map((item, index) => {
                            return <div key={index}><img src={item.src} alt={item.alt}/></div>
                        })

                    }
                    <div><img src={imgUrl} alt="img1"/></div>

                </div>
                {
                    arrowNode
                }
                {
                    dotsNodes
                }


            </div>
        )
    }
}