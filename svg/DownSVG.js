import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class DownSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M197,39.7c3.1,0,4,1.9,2,4.3l-95.4,114.5c-2,2.4-5.2,2.4-7.1,0L1,44c-2-2.4-1.1-4.3,2-4.3L197,39.7L197,39.7z"} fill={"#333"}/>
                </Group>

            </Surface>
        );
    }
}

export default DownSVG;