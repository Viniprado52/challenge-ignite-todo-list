import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginBottom: 15,
    height: 70,
    backgroundColor: 'rgba(32,32,32,0.8)',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  doneButtonOk: {
    width: 24,
    height: 24,
    backgroundColor: '#5E60CE',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  doneButtonIcon: {
    width: 10,
    height: 10,
  },
  doneButtonNOk: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    borderRadius: 15,
    opacity: 0.7
  },
  textTask: {
    flex: 1,
    marginLeft: 10,
    color: '#F2F2F2',
    fontSize: 14,
  },
  textTaskDone: {
    flex: 1,
    marginLeft: 10,
    color: '#808080',
    opacity: 0.8,
    fontSize: 14,
    textDecorationLine: 'line-through'
  },
  deleteButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteIcon: {
    width: 35,
    height: 35
  }
});