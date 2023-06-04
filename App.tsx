
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = () => {
    setContacts(prevContacts => [
      ...prevContacts,
      { name: name, phone: phone }
    ]);
    setName('');
    setPhone('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Contact App
      </Text>
      <View style={{ marginBottom: 10 }}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={{ borderWidth: 1, padding: 10 }}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
          style={{ borderWidth: 1, padding: 10 }}
        />
      </View>
      <Button title="Add Contact" onPress={addContact} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
        Contacts:
      </Text>
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            <Text style={{ fontSize: 14, color: '#888' }}>{item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ContactApp;
