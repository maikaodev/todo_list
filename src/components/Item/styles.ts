import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    width: 330,
    height: 56,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    gap: 8,

    borderWidth: 1,
    borderRadius: 6,

    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    padding: 6,
  },
});
