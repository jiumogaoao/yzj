import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class HostSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M130.2,111.8a59.6,59.6,0,1,0-60.8,0A85.74,85.74,0,0,0,14,192a7,7,0,0,0,14,0,72,72,0,0,1,144,0,7,7,0,0,0,14,0,86.67,86.67,0,0,0-55.8-80.2Zm-76-51.2a45.6,45.6,0,1,1,45.6,45.6A45.58,45.58,0,0,1,54.2,60.6Z"}  fill="#fff"/>
                </Group>

            </Surface>
        );
    }
}

export default HostSVG;