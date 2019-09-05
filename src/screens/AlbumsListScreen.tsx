import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Alert } from '../components/Alert';
import { AlbumListView } from '../components/AlbumListView';

export const AlbumListScreen: React.FC<NavigationScreenProps> = props => {
  const [refreshing, setRefreshing] = React.useState(false);

  const handleRefresh = () => {};

  let data = { me: { display_name: '' }, items: [] };
  if (!data || !data.items) {
    return <Alert type="red" message="Error retrieving data." />;
  }

  return (
    <AlbumListView
      navigation={props.navigation}
      name={data.me.display_name}
      albums={data.items}
      onRefresh={handleRefresh}
      refreshing={refreshing}
    />
  );
};
