import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class CameraSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M50.9,54.5H19.5V43.7h31.4V54.5z"}  fill={this.props.color||"#C1C2C2"}/>
                    <Shape d={"M179.6,54.5h-18.9v-8.4h18.9V54.5z"}  fill={this.props.color||"#C1C2C2"}/>
                    <Shape d={"M71.9,54.5l7.5-20.1h40.4l7.5,20.1H71.9z"}  fill={this.props.color||"#C1C2C2"}/>
                    <Shape d={"M100,72.5c-20.4,0-37,16.6-37,37s16.6,37,37,37s37-16.6,37-37S120.4,72.5,100,72.5z M100,133.5\n" +
                    "\tc-13.3,0-24.1-10.8-24.1-24.1S86.7,85.3,100,85.3c13.3,0,24.1,10.8,24.1,24.1S113.3,133.5,100,133.5z"}  fill={this.props.color||"#C1C2C2"}/>
                    <Shape d={"M0.6,53.3v112.3h198.8V53.3H0.6z M22.8,153.3c-3.6,0-6.6-2.9-6.6-6.6s2.9-6.6,6.6-6.6c3.6,0,6.6,2.9,6.6,6.6\n" +
                    "\tS26.4,153.3,22.8,153.3z M100,155.7c-25.5,0-46.3-20.7-46.3-46.3S74.5,63.2,100,63.2s46.3,20.7,46.3,46.3S125.5,155.7,100,155.7z"}  fill={this.props.color||"#C1C2C2"}/>
                </Group>
            </Surface>
        );
    }
}

export default CameraSVG;