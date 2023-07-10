import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 56,
    marginHorizontal: 24,

    gap: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 8,
  },
  input: {
    height: 40,
    width: 230,

    margin: 12,
    padding: 10,

    borderWidth: 1,
  },
  button: {
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 16,

    borderRadius: 6,
    borderWidth: 1,
  },
  list: {
    height: 56,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 16,
  },
  tag: {
    color: 'red',
  },
});
