import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if(loading) {
      return;
    }

    if(count > 0 && incidents.length === count){
      return;
    }

    setLoading(true);
    
    const response = await api.get('incidents', { params: { page }});
    setIncidents([...incidents,  ...response.data]);
    setCount(response.headers['x-total-count']);
    setPage(page + 1);

    setLoading(false);
  }

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}></Image>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{count} caso(s)</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041"></Feather>
            </TouchableOpacity>
          </View>
        )}
      />
      
    </View>
  );
}