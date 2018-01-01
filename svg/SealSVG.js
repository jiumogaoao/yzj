import React, { Component } from 'react';
import {ART} from 'react-native'
let {
    Shape,
    Group,
    Transform,
    Surface,
    Path
} = ART;

class SealSVG extends Component {

    render() {
        return (
            <Surface width={200*this.props.s} height={200*this.props.s}>
                {this.props.hl?(<Group scale={this.props.s}>
                    <Shape d={"M53.3,94.8c0,0-23.8-11.9-17.3-50.4c0,0,3.6-37.1,47.7-39c0,0,43.2-1.6,47.5,44.6c0,0,5.3,33.7-20.1,44.2\n" +
                    "\tc0,0,31.5,30.7,3.1,33.9H50.7C50.7,128.3,22.5,125.5,53.3,94.8z"}  fill="#3382BD"/>
                    <Shape d={"M114.6,133.7H50.2c-1.3-0.1-12.5-1.5-15.8-10.7c-2.6-7.3,0.9-16.4,10.8-27.4c-7.6-6.6-19.5-22.1-14.5-51.9\n" +
                    "\tC31.2,39.8,37.4,1.9,83.6,0h0.8c4.9,0,47.8,1.4,52.4,49.4c0.4,2.9,4.1,32.3-16.8,46.3c5.9,6.9,14,18.6,10.9,27.8\n" +
                    "\tc-2,5.7-7.3,9.1-16,10.1H114.6z M51,122.8h62.9c3.7-0.5,6.2-1.5,6.6-2.8c1.4-3.9-5.9-14.7-13.2-21.8l-5.9-5.8l7.6-3.2\n" +
                    "\tc21.1-8.8,17-37.2,16.9-38.4v-0.3c-3.6-37.8-35.3-39.7-41.6-39.7H84c-38.9,1.6-42.4,32.7-42.5,34l0,0.4C35.7,78.9,55,89.4,55.9,89.9\n" +
                    "\tl6.6,3.4l-5.2,5.3c-14.1,14.1-13,19.7-12.7,20.7C45.3,121.5,49.3,122.6,51,122.8z"}  fill="#3382BD"/>
                    <Shape d={"M5.4,168.1v-18.2c0,0-0.6-4.5,9.4-5.1l138-0.1c0,0,8.4,0,8.4,7.5v16L5.4,168.1z"}  fill="#3382BD"/>
                    <Shape d={"M166.7,173.6H0V150c-0.1-2.1,0.6-4.1,2-5.7c2.4-2.9,6.6-4.6,12.5-4.9h0.3l138-0.1l0,0c2.2,0,4.4,0.5,6.4,1.4\n" +
                    "\tc4.6,1.9,7.6,6.5,7.4,11.5L166.7,173.6z M10.9,162.8h144.9v-10.6c0-1-0.2-1.3-1-1.6c-0.6-0.3-1.3-0.4-2-0.5L15,150.2\n" +
                    "\tc-1.4,0-2.8,0.3-4.1,0.8L10.9,162.8z"}  fill="#3382BD"/>
                    <Shape d={"M10.6,178.6h147.7v20.9H10.6V178.6z"}  fill="#3382BD"/>
                </Group>):(<Group scale={this.props.s}>
                    <Shape d={"M114.9,134H50.3c-1.3-0.1-12.5-1.5-15.9-10.8c-2.6-7.4,0.9-16.4,10.9-27.5c-7.7-6.7-19.5-22.2-14.5-52.1 c0.5-3.8,6.7-41.8,53-43.7h0.8c4.9,0,47.9,1.4,52.5,49.6c0.4,2.9,4.1,32.4-16.8,46.5c6,6.9,14.1,18.6,10.9,27.8 c-2,5.7-7.4,9.2-16,10.1H114.9z M51.1,123.1h63.1c3.7-0.5,6.2-1.5,6.6-2.8c1.4-3.9-5.9-14.7-13.2-21.9l-5.9-5.8l7.6-3.2 c21.2-8.8,17.1-37.3,16.9-38.5v-0.3c-3.6-37.9-35.4-39.8-41.7-39.8h-0.3C45.2,12.5,41.7,43.7,41.6,45v0.4 c-5.7,33.7,13.6,44.3,14.5,44.7l6.5,3.4l-5.2,5.3c-14.1,14.1-13,19.8-12.7,20.8C45.5,121.8,49.5,123,51.1,123.1L51.1,123.1z"}  fill="#6E6E6E"/>
                    <Shape d={"M167.2,174H0v-23.6c-0.1-2.1,0.6-4.1,2-5.8c2.4-2.9,6.6-4.6,12.5-5h0.3l138.4-0.2l0,0c2.2,0,4.4,0.5,6.4,1.4\n" +
                    "\tc4.6,2,7.6,6.5,7.4,11.6L167.2,174z M10.9,163.2h145.4v-10.6c0-1-0.2-1.3-1-1.6c-0.6-0.3-1.3-0.4-2-0.5L15,150.6\n" +
                    "\tc-1.4,0-2.8,0.3-4.1,0.8L10.9,163.2z"}  fill="#6E6E6E"/>
                    <Shape d={"M10.6,179.1h148.2v20.9H10.6V179.1z"}  fill="#6E6E6E"/>
                    <Shape d={"M16,188.9h137.3v1.5H16V188.9z"}  fill="#fff"/>
                </Group>)}
            </Surface>
        );
    }
}

export default SealSVG;