import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
// import MenuBurger from '../components/Menu'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import GridMenu from '../components/GridMenu'

import Icon from 'react-native-vector-icons/EvilIcons'
import { OffCanvas3D } from 'react-native-off-canvas-menu'

const Dashboard = ({ navigation }) => (
  <Background>
    {/* <View style={{ flex: 1 }}>
      <OffCanvas3D
        // active={this.state.menuOpen}
        // onMenuPress={this.handleMenu.bind(this)}
        backgroundColor={'#222222'}
        menuTextStyles={{ color: 'white' }}
        handleBackPress={true}
        menuItems={[
          {
            title: 'Menu 1',
            icon: <Icon name="camera" size={35} color="#ffffff" />,
            renderScene: <MyScene />,
          },
          {
            title: 'Menu 2',
            icon: <Icon name="bell" size={35} color="#ffffff" />,
            renderScene: <AnotherScene />,
          },
        ]}
      />
    </View> */}
    <Logo />
    <Header>หน้าเมนูหลัก</Header>
    <GridMenu></GridMenu>
    <Paragraph></Paragraph>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }
    >
      ออกจากระบบ
    </Button>
  </Background>
)

export default Dashboard
