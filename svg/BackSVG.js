import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class BackSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M81.36,100.21l71.18-72.79a16.31,16.31,0,0,0,0-22.72,15.45,15.45,0,0,0-22.2,0L51.55,85.28a15.77,15.77,0,0,0-4.11,3,16.1,16.1,0,0,0-4.57,11.92,16.2,16.2,0,0,0,4.57,12,15.87,15.87,0,0,0,4.39,3.17l78.51,80a15.52,15.52,0,0,0,22.2,0,16.17,16.17,0,0,0,0-22.6Zm0,0"}  fill="#fff"/>
                </Group>

            </Surface>
        );
    }
}

export default BackSVG;