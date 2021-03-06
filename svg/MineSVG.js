import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class MineSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                    {this.props.hl?(<Group scale={this.props.s}><Shape d={"M152.7,63.2c0,30.7-25,55.7-55.8,55.7C66,118.8,41,63.2,41,63.2S57.7,7.5,96.8,7.5S152.7,28.4,152.7,63.2z"}  fill="#3382BD"/>
                        <Shape d={"M100,122.3c-33.7,0-61.1-27.4-61.1-61.1c0-33.7,27.4-61.1,61.1-61.1c33.7,0,61.1,27.4,61.1,61.1 C161.1,94.9,133.7,122.3,100,122.3z M100,11c-27.7,0-50.2,22.5-50.2,50.2c0,27.7,22.5,50.2,50.2,50.2c27.7,0,50.2-22.5,50.2-50.2 C150.2,33.5,127.7,11,100,11z"}  fill="#3382BD"/><Shape d={"M100,115.1c-46.8,0-84.8,38-84.8,84.8h169.6C184.8,153.2,146.8,115.1,100,115.1z"}  fill="#3382BD"/></Group>):(<Group scale={this.props.s}><Shape d={"M100,122.3c-33.6,0-61-27.4-61-61c0-33.6,27.4-61,61-61c33.7,0,61,27.4,61,61 C161,94.9,133.6,122.3,100,122.3z M100,11.1c-27.6,0-50.1,22.5-50.1,50.1c0,27.6,22.5,50.1,50.1,50.1c27.6,0,50.1-22.5,50.1-50.1 C150.1,33.6,127.6,11.1,100,11.1z"}  fill="#6E6E6E"/>
                        <Shape d={"M100,126c40.7,0,73.8,33.1,73.8,73.8h10.9c0-46.7-38-84.7-84.7-84.7c-46.7,0-84.7,38-84.7,84.7h10.9 C26.2,159.1,59.3,126,100,126z"}  fill="#6E6E6E"/></Group>)}
            </Surface>
        );
    }
}

export default MineSVG;