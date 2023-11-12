import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './app/stacks/home-stack';

const App = () => {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    );
};

export default App;
