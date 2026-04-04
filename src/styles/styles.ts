import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  callout: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
  },
  button: {
    // flex: 1,
    height: 56,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});