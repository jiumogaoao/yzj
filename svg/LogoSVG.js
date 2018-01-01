import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class LogoSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M51.91,152.93l14.53-23.4,33.89-25.83,18.56-45.19,81.11,79V29.05A29.13,29.13,0,0,0,171,0H29.72a29.13,29.13,0,0,0-29,29.05V170.28a29.13,29.13,0,0,0,29.05,29.05h72Z"}  fill="#36b0ff"/>
                    <Shape d={"M51.91,145.26a9.31,9.31,0,0,0,9.28,9.28h79.09a9.3,9.3,0,0,0,9.28-9.28V137.6H51.91Z"}  fill="#fff"/>
                    <Shape d={"M140.28,109.35H112.44V99.81a27,27,0,1,0-25.83-.44v10H61.19a9.31,9.31,0,0,0-9.28,9.28v16.55h97.65V118.63A9.31,9.31,0,0,0,140.28,109.35Z"}  fill="#fff"/>
                </Group>

            </Surface>
        );
    }
}

export default LogoSVG;