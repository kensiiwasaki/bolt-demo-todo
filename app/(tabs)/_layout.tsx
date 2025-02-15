import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const MINT_GREEN = '#98D8C8';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
        tabBarActiveTintColor: MINT_GREEN,
        headerStyle: {
          backgroundColor: MINT_GREEN,
        },
        headerTintColor: '#ffffff',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'TODOリスト',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '設定',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}