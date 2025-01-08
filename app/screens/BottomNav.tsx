import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import PageOne from './PageOne';


const MusicRoute = () => <PageOne />;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Resource', focusedIcon: 'book-open-page-variant', unfocusedIcon: 'book-open-page-variant-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
     barStyle={{backgroundColor:"black"}}
     activeColor='#DE3163' 
     inactiveColor='white'
    
      />
    
  );
};

export default MyComponent;