import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class PasswordSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M93.29,140.93v17a6.72,6.72,0,0,0,13.43,0v-17a15.4,15.4,0,0,0,9-13.92,15.67,15.67,0,1,0-22.38,13.92m79.78-64.44H53.15a8.39,8.39,0,0,0,.6-3.1V64.2C53.75,39,74.5,18.5,100,18.5S146.25,39,146.25,64.2a8.86,8.86,0,0,0,17.71,0C164,29.35,135.27,1,100,1S36,29.35,36,64.2v9.19a8.6,8.6,0,0,0,.6,3.1H26.94A13,13,0,0,0,13.65,89.25v97A13.05,13.05,0,0,0,26.94,199H173.06c7.32,0,13.29-5.73,13.29-12.76v-97a13,13,0,0,0-13.28-12.76m-4.43,105H31.38V94H168.64Z"}  fill="#fff"/>
                </Group>

            </Surface>
        );
    }
}

export default PasswordSVG;