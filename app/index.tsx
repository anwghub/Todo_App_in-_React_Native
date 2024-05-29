import { Redirect } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const index: React.FC = () => {
    return (
        <Redirect href="/(authenticate)/login"/>
    );
};

export default index;

const styles = StyleSheet.create({});