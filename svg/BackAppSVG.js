import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class BackAppSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M182.1,65.6c-11.4-11.4-26.7-17.8-42.9-17.8H48.4l0-28L3.5,52.2c-4.5,4.5-4.5,5.1,0,9.7l44.9,32.4l0-32.5\n" +
                    "\th90.8c25.8,0,46.7,21,46.7,46.7v11.1c0,25.8-21,46.7-46.7,46.7H7.2c-3.8,0-7,3.1-7,7c0,3.8,3.1,7,7,7h132c16.2,0,31.4-6.3,42.9-17.8\n" +
                    "\tc11.4-11.4,17.8-26.7,17.8-42.9v-11.1C199.9,92.3,193.6,77.1,182.1,65.6z"}/>
                </Group>

            </Surface>
        );
    }
}

export default BackAppSVG;