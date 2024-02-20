//define as rotas
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from "./pages/login"
import { Home } from "./pages/home"
import { Passwords } from "./pages/passwords"

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color}) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name="home"/>
                        }
                        return <Ionicons size={size} color={color} name="home-outline"/>
                    }
                }}
            />
            <Tab.Screen
                name="passwords"
                component={Passwords}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color}) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name="lock-closed"/>
                        }
                        return <Ionicons size={size} color={color} name="lock-closed-outline"/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export function StackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={Login}
            />
    
            <Stack.Screen
                name="tab"
                component={TabNavigator}
            />
        </Stack.Navigator>
    )

}

