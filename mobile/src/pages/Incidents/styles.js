import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerText: {
    fontSize: 15,
    color: '#787880'
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  title: {
    fontSize: 30,
    marginTop: 48,
    marginBottom: 16,
    color: '#13131a',
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#787880'
  },

  incidentList: {
    marginTop: 32
  },

  incident: {
    padding: 24,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: "bold"
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 15,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: "bold",
  }

});