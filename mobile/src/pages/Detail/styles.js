import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  incident:{
    marginTop: 32,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF'
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: "bold"
  },

  incidentPropertyGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 15,
    color: '#737380'
  },

  contactBox: {
    marginTop: 32,
    padding: 24,
    backgroundColor: "#FFF",
    borderRadius: 8,
  },
  
  contactTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
  },

  contactDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  action: {
    backgroundColor: '#E02041',
    height: 50,
    width: '48%',
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },

  actionText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF"
  }

});