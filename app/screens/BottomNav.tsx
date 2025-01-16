import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageFive from './PageFive';


const MusicRoute = () => <PageOne/>;

const AlbumsRoute = () => <PageTwo/>;

const RecentsRoute = () => <Text>Recents</Text>;

const NewsRoute = () => <Text>Updates</Text>;

const NotificationsRoute = () => <PageFive/>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Resource', focusedIcon: 'book-open-page-variant', unfocusedIcon: 'book-open-page-variant-outline'},
    { key: 'albums', title: 'Staff', focusedIcon: 'account-tie', unfocusedIcon:'account-tie-outline'},
    { key: 'news', title: 'Updates', focusedIcon: 'microsoft-dynamics-365', unfocusedIcon:'microsoft-dynamics-365'},
    { key: 'recents', title: 'Hostel', focusedIcon: 'home-city', unfocusedIcon: 'home-city-outline' },
    { key: 'notifications', title: 'College', focusedIcon: 'bank', unfocusedIcon: 'bank-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    news: NewsRoute,
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