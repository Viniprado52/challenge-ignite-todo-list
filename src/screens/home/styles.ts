import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010'
  },
  outlinedView: {
    backgroundColor: '#000000'
  },
  logoContent: {
    flex: 2,
    alignItems: 'center',
  },
  logoTodo: {
    marginTop: 100,
    width: 110.34,
    height: 32
  },
  inputTaskGroup: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    flexDirection: 'row',
    zIndex: 2
  },
  inputTask: {
    flex: 1,
    height: 60,
    backgroundColor: 'rgba(32,32,32,1)',
    borderRadius: 7,
    color: 'white',
    paddingHorizontal: 15,
    fontSize: 16
  },
  addTaskButton: {
    width: 60,
    height: 60,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 5
  },
  plusIconButton: {
    width: 16,
    height: 16
  },
  inputContent: {
    zIndex: 1,
    marginTop: -32,
    paddingTop: 50,
    backgroundColor: '#101010'
  },
  infoTaskGroup: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskListContent: {
    flex: 50,
    paddingTop: 15,
    backgroundColor: '#101010'
  },
  textColors: {
    color: 'white',
    fontWeight: 'bold'
  },
  list: {
    paddingHorizontal: 15
  }
});