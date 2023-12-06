import { Image, StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import MyDrawer from './MyDrawer'

export default function DrawerMenu() {
    return (
        <MyDrawer />
    );
}

