import React from 'react';
import { NavigationScreenProps, ScrollView } from 'react-navigation';
import { StyleSheet, View, SafeAreaView, TextInput, Text } from 'react-native';
import { AlbumHeader } from '../components/AlbumHeader';
import { Colors } from '../helpers/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFetch } from '@ryanar/hooks';
import { material } from 'react-native-typography';

export const AlbumNotesScreen: React.FC<NavigationScreenProps> = props => {
  const [notes, setNotes] = React.useState<string>('');

  const id = props.navigation.getParam('id', '');
  const uri = props.navigation.getParam('uri', '');
  const name = props.navigation.getParam('name', '');

  const [state, postNotes] = useFetch({
    url: 'https://jsonplaceholder.typicode.com/posts',
    options: {
      method: 'POST',
      body: JSON.stringify({
        title: name,
        body: notes,
        userId: 1,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
    onSuccess: data => {
      setNotes('');
    },
    onError: err => console.error(err),
  });

  if (!id || !uri || !name) {
    props.navigation.navigate('AlbumList');
  }

  const handleChangeNotes = (text: string) => setNotes(text);

  const handleSubmit = () => {
    postNotes();
  };

  return (
    <View style={styles.container}>
      <AlbumHeader title={`${name} Notes`} uri={uri} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.notesContainer}>
          <TextInput
            value={notes}
            onChangeText={handleChangeNotes}
            style={[styles.textInput, styles.textArea]}
            multiline={true}
            textAlignVertical="top"
            placeholder="Album notes.."
            placeholderTextColor={Colors.placeholderText}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
            disabled={state.loading}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

// @ts-ignore
AlbumNotesScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notesContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textInput: {
    borderColor: Colors.spotifyBlack,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 16,
  },
  textArea: {
    minHeight: 100,
  },
  button: {
    backgroundColor: Colors.spotifyGreen,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    ...material.subheadingWhiteObject,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
