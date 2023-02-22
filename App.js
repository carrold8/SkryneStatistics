import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Home from './Components/Pages/Home';
import { dummySquad } from './dummyNamesJSON';

export default function App() {
  return (
    <View style={{backgroundColor: 'grey'}}>
      <StatusBar style='light'/>
      <View style={{height: '10%', backgroundColor: 'blue', justifyContent: 'center', padding: '2%'}}>
        <Text style={{fontSize: 18, color: '#fff'}}>Possession: </Text>
      </View>
      <ScrollView>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: '2%', height: '100%'}}>
            
            {/* {dummySquad.map((data, index) => {
              return (
                <View style={[styles.container]} key={index}>
                  <Home name={data} number={index + 1}/>
                </View>
              )
            })} */}

            <View style={[styles.container, {marginTop: 35}]}>
              <Home name={'James'} number={1}/>
              <Home name={'Martin'} number={2}/>
            </View>
            <View style={styles.container}>
              <Home name={'Ian'} number={3}/>
              <Home name={'Jimmy'} number={4}/>
            </View>
            <View style={styles.container}>
              <Home name={'Jack'} number={5}/>
              <Home name={'Andrew'} number={6}/>
            </View>
            <View style={styles.container}>
              <Home name={'Stephen'} number={7}/>
              <Home name={'Tom'} number={8}/>
            </View>
            <View style={styles.container}>
              <Home name={'Mark'} number={9}/>
              <Home name={'Niall'} number={10}/>
            </View>
            <View style={styles.container}>
              <Home name={'Harry'} number={11}/>
              <Home name={'Cian'} number={12}/>
            </View>
            <View style={styles.container}>
              <Home name={'Sean'} number={13}/>
              <Home name={'David'} number={14}/>
            </View>
            <View style={styles.container}>
              <Home name={'Frank'} number={15}/>
              <Home name={'Ciaran'} number={16}/>
            </View>
            <View style={[styles.container, {marginBottom: '60%'}]}>
              <Home name={'Ben'} number={17}/>
              <Home name={'Doug'} number={18}/>
            </View>
          </View>
        </ScrollView>
        
    </View>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: 20
  },
});
