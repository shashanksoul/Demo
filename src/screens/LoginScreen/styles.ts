import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    width: '100%',
    backgroundColor: '#FFFFFF80',
    borderRadius: 20,
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#FF000098',
    paddingVertical: 20,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: '#80808050',
  },
  buttonText: {
    color: 'white',
  },
  buttonDisabledText: {
    color: 'black',
  },
  backgroundImage: {
    position: 'absolute',
  },
});
