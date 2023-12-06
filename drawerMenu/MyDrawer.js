//IMPORTAÇÕES DO MENU DRAWER
import { createDrawerNavigator } from '@react-navigation/drawer';

//IMPORTAÇÃO DAS TELAS NAVEGAVEIS NO DRAWERMENU
import Home from '../screens/Home'
import Filme from '../screens/Filme'
import Categoria from '../screens/Categoria'


//CRIAÇÃO DO NAVIGATOR DO DRAWERMENU
const Drawer = createDrawerNavigator();

// CONSTRUÇÃO DE UM FUNCTIONAL COMPONENT
export default function MyDrawer(){
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerTintColor: 'white',
            drawerActiveTintColor: "#FF0000",
            drawerInactiveTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#3c3c3c',
                             
            },
            drawerStyle: {
                backgroundColor: '#171718',    
                           
            },
            
            
        }}>
            <Drawer.Screen
            name='Home'
            component={Home}
            options={
                {
                    title:'Home',
                    headerTitleStyle:{color:'trasparent'},
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color: 'white',
                    },                  
                }
            }
            />

        <Drawer.Screen
            name='Filme'
            component={Filme}
            options={
                {
                    title:'Filme',
                    headerTitleStyle:{color:'trasparent'},
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color: 'white',
                    },
            }
            
            }
            />

        <Drawer.Screen
            name='Categoria'
            component={Categoria}
            options={
                {  
                    title:'Categoria',
                    headerTitleStyle:{color:'trasparent'},
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color: 'white',
                    },
            }
            }
            />

        </Drawer.Navigator>

        
    );
}




