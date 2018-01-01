import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addNavigationHelpers,StackNavigator } from "react-navigation";
import Index from '../view/Index';
import Register from '../view/Register';
import RegisterPhone from '../view/RegisterPhone';
import Forget from '../view/Forget';
import Main from '../view/Main';
import Set from '../view/Set';
import DeviceControl from '../view/DeviceControl';
import Paired from '../view/Paired';
import Check from '../view/Check';
import CheckList from '../view/CheckList';
import Checked from '../view/Checked';
import Photo from '../view/Photo';

var navoption={
    header:null
}

const AppNavigator = StackNavigator({
    Index: { screen: Index,navigationOptions:navoption},
    Register: { screen: Register,navigationOptions:navoption},
    Forget: { screen: Forget,navigationOptions:navoption},
    Main: { screen: Main,navigationOptions:navoption},
    RegisterPhone: { screen: RegisterPhone,navigationOptions:navoption},
    Set: { screen: Set,navigationOptions:navoption},
    DeviceControl: { screen: DeviceControl,navigationOptions:navoption},
    Paired: { screen: Paired,navigationOptions:navoption},
    Check: { screen: Check,navigationOptions:navoption},
    CheckList: { screen: CheckList,navigationOptions:navoption},
    Checked: { screen: Checked,navigationOptions:navoption},
    Photo: { screen: Photo,navigationOptions:navoption}
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: auth })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(AppWithNavigationState);
