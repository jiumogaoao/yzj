import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class KeyboardSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M4.8,67.5H28c2.8,0,4.6-1.9,4.6-4.6V39.6c0-2.8-1.9-4.6-4.6-4.6H4.8c-2.8,0-4.6,1.9-4.6,4.6v23.2C0.2,65.6,2,67.5,4.8,67.5z\n" +
                    "\t M60.5,67.5h23.2c2.8,0,4.6-1.9,4.6-4.6V39.6c0-2.8-1.9-4.6-4.6-4.6H60.5c-2.8,0-4.6,1.9-4.6,4.6v23.2\n" +
                    "\tC55.9,65.6,57.7,67.5,60.5,67.5z M116.3,67.5h23.2c2.8,0,4.6-1.9,4.6-4.6V39.6c0-2.8-1.9-4.6-4.6-4.6h-23.2c-2.8,0-4.6,1.9-4.6,4.6\n" +
                    "\tv23.2C111.6,65.6,113.5,67.5,116.3,67.5L116.3,67.5z M195.2,35H172c-2.8,0-4.6,1.9-4.6,4.6v23.2c0,2.8,1.9,4.6,4.6,4.6h23.2\n" +
                    "\tc2.8,0,4.6-1.9,4.6-4.6V39.6C199.8,36.9,198,35,195.2,35z M4.8,119.5H28c2.8,0,4.6-1.9,4.6-4.6V91.6c0-2.8-1.9-4.6-4.6-4.6H4.8\n" +
                    "\tc-2.8,0-4.6,1.9-4.6,4.6v23.2C0.2,117.6,2,119.5,4.8,119.5z M60.5,119.5h23.2c2.8,0,4.6-1.9,4.6-4.6V91.6c0-2.8-1.9-4.6-4.6-4.6\n" +
                    "\tH60.5c-2.8,0-4.6,1.9-4.6,4.6v23.2C55.9,117.6,57.7,119.5,60.5,119.5z M116.3,119.5h23.2c2.8,0,4.6-1.9,4.6-4.6V91.6\n" +
                    "\tc0-2.8-1.9-4.6-4.6-4.6h-23.2c-2.8,0-4.6,1.9-4.6,4.6v23.2C111.6,117.6,113.5,119.5,116.3,119.5L116.3,119.5z M195.2,87H172\n" +
                    "\tc-2.8,0-4.6,1.9-4.6,4.6v23.2c0,2.8,1.9,4.6,4.6,4.6h23.2c2.8,0,4.6-1.9,4.6-4.6V91.6C199.8,89.3,198,87,195.2,87z M195.2,146.4H4.8\n" +
                    "\tc-2.8,0-4.6,1.9-4.6,4.6v9.3c0,2.8,1.9,4.6,4.6,4.6h190.4c2.8,0,4.6-1.9,4.6-4.6v-9.3C199.8,148.3,198,146.4,195.2,146.4z"} fill={'#a8a8a8'}/>
                </Group>

            </Surface>
        );
    }
}

export default KeyboardSVG;