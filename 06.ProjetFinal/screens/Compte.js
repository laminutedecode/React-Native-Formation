import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import data from './data.json'; // Importation du fichier JSON

const Compte = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Concaténer et trier les dépenses et les entrées d'argent par date
    const allTransactions = [...data.depenses.map(transaction => ({ ...transaction, type: 'depense' })),
      ...data.entrees_dargent.map(transaction => ({ ...transaction, type: 'entree' }))];
    const sortedTransactions = allTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    setTransactions(sortedTransactions);
  }, []);

  const renderTransactionItem = ({ item }) => (
   
     <View style={styles.transactionItem}>
      <View style={styles.transactionInfo}>
        <Text style={[styles.description, item.type === 'depense' ? styles.red : styles.green]}>
          {item.description}
        </Text>
        <Text style={[styles.date]}>
          {item.date}
        </Text>
      </View>
      <Text style={[styles.amount, item.type === 'depense' ? styles.red : styles.green]}>
        {item.amount} €
      </Text>
    </View>

  );

  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Compte n°: 5365895</Text>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false} 

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 10,
    backgroundColor: 'midnightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    padding: 20,
  },
  transactionInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  description: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
});

export default Compte;
