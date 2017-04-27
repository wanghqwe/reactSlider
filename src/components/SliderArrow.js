var React = require("react");
export default class SliderArrow extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLeftClick() {
        this.props.turn(-1);
    }

    handleRightClick() {
        this.props.turn(1);
    }

    render() {
        return (
            <div>
                <a href="javascript:void(0)" className="arrow arrow-left" onClick={this.handleLeftClick.bind(this)}></a>
                <a href="javascript:void(0)" className="arrow arrow-right"
                   onClick={this.handleRightClick.bind(this)}></a>
            </div>

        )
    }
}