import { Component } from "react";

class ImageComponent extends Component {
    render(){
        return <img src={this.props.link} className="App-logo" alt={this.props.link} />
    }
}

export default ImageComponent