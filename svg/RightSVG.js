import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class RightSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M153.5,94C153.5,93.2,152.6,93.2,153.5,94L67.4,3.7c-4.3-5.1-11.9-5.1-17,0c-5.1,4.3-5.1,11.9,0,17l77.6,81l-81,77.6\n" +
                    "\tc-5.1,4.3-5.1,11.9,0,17c4.3,5.1,11.9,5.1,17,0l89.5-85.2c0.9-0.9,1.7-2.6,2.6-4.3C157.7,102.6,156.9,97.4,153.5,94z"} fill={'#6e6e6e'}/>
                </Group>

            </Surface>
        );
    }
}

export default RightSVG;