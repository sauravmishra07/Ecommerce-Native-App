import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '@/constants'
export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#F0F0F0',
            height: 68,
            paddingTop: 8
        }
    }}  
    >
        <Tabs.Screen name='index' options={{
            tabBarIcon: ({ color, focused}) => <Ionicons name={focused ? 'home' : 'home-outline'} size={27} color={color}/>
        }}/>

         <Tabs.Screen name='cart' options={{
            tabBarIcon: ({ color, focused}) => <Feather name={focused ? 'shopping-cart' : 'shopping-cart'} size={27} color={color}/>
        }}/>

         <Tabs.Screen name='favorites' options={{
            tabBarIcon: ({ color, focused}) => <MaterialIcons name={focused ? 'favorite' : 'favorite'} size={27} color={color}/>
        }}/>

         <Tabs.Screen name='profile' options={{
            tabBarIcon: ({ color, focused}) => <Feather name={focused ? 'user' : 'user'} size={27} color={color}/>
        }}/>
    </Tabs>
  )
}