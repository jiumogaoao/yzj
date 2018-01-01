import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class CollectSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                <Group scale={this.props.s}>
                    <Shape d={"M1,106.9l5.3-7.1c1.3-1.8,3.9-2.2,5.7-0.9l46.4,32.8c3.1,2.2,7.3,2,10.2-0.5L190.3,26.4 c1.7-1.4,4.2-1.3,5.7,0.3l2.7,2.8c1.5,1.6,1.5,4.1,0,5.7L69.7,172c-3.1,3.3-8.4,3.5-11.7,0.3c-0.1-0.1-0.2-0.2-0.3-0.3L1.3,112.2 C-0.1,110.8-0.2,108.5,1,106.9z"}  fill="#00A527"/>
                </Group>

            </Surface>
        );
    }
}

export default CollectSVG;