import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function Home({number, name}){

    const [blocks, setBlocks] = useState(0);
    const [turnovers, setTurnovers] = useState(0);
    const [contacts, setContacts] = useState(0);
    const [playerTotal, setPlayerTotal] = useState(0);

    const handleBlocks = async (input) => {

        if(input === '-' && blocks > 0){
            setBlocks( blocks - 1);
        }
        else if(input === '+'){
            setBlocks(blocks + 1);
        }

    };

    const handleTurnovers = async (input) => {

        if(input === '-' && turnovers > 0){
            setTurnovers( turnovers - 1);
        }
        else if(input === '+'){
            setTurnovers(turnovers + 1);
        }

    };

    const handleContacts = async (input) => {

        if(input === '-' && contacts > 0){
            setContacts( contacts - 1);
        }
        else if(input === '+'){
            setContacts(contacts + 1);
        }

    };

    return(
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'blue', alignItems: 'center'}}>
                <View style={{flex: 2}}>
                    <Text style={styles.playerNumber}>
                        {number}
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.playerText}>{name}</Text>
                </View>
            </View>
            
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
                <Text style={{margin: 5}}>Turn</Text>
                    <TouchableOpacity style={styles.ViewJourneyBtn} onPress={() => handleBlocks('+')}>
                        <Text style={styles.homePageBtnText}>+</Text>
                    </TouchableOpacity>
                    <Text style={{margin: 5}}>{blocks}</Text>
                    <TouchableOpacity style={styles.ViewJourneyBtn} onPress={() => handleBlocks('-' )}>
                        <Text style={styles.homePageBtnText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
                    <Text style={{margin: 5}}>Blk</Text>
                    <TouchableOpacity style={styles.ViewJourneyBtn} onPress={() => handleTurnovers('+')}>
                        <Text style={styles.homePageBtnText}>+</Text>
                    </TouchableOpacity>
                    <Text style={{margin: 5}}>{turnovers}</Text>
                    <TouchableOpacity style={styles.ViewJourneyBtn} onPress={() => handleTurnovers('-' )}>
                        <Text style={styles.homePageBtnText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
                    <Text style={{margin: 5}}>C/T</Text>
                    <TouchableOpacity style={styles.ViewJourneyBtn} onPress={() => handleContacts('+')}>
                        <Text style={styles.homePageBtnText}>+</Text>
                    </TouchableOpacity>
                    <Text style={{margin: 5}}>{contacts}</Text>
                    <TouchableOpacity style={styles.ViewJourneyBtn} onPress={() => handleContacts('-' )}>
                        <Text style={styles.homePageBtnText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderColor: 'black', borderWidth: 1,justifyContent: 'center', alignItems: 'center', flex: 3}}>
                    <Text style={{fontWeight: 'bold'}}>Total</Text>
                    <Text style={{fontWeight: 'bold'}}>{(blocks * 5) + (turnovers * 5) + (contacts * 2)}</Text>
                </View>
            </View>
        </View>
    );

}


// styling
const styles = StyleSheet.create({

    container: {
      flex: 1,
      display: 'flex',
      borderColor: 'blue',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      paddingBottom: 5,
      borderWidth: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      height: '100%',
      margin: 1
    },
    scrollBackground: {
      backgroundColor: '#003f5c',
    },
    playerText: {
        fontWeight: 'bold',
      color: 'white',
      fontSize: 15,
      textAlign: 'left',
    },
    playerNumber: {
        fontWeight: 'bold',
      color: 'white',
      fontSize: 25,
      textAlign: 'left',
      paddingLeft: 15
    },
    homePageBtnText: {
      flex: 1,
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      
    },

    ViewJourneyBtn: {
        
      width: 30,
      backgroundColor: 'blue',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      borderRadius: 5,
    },
  });


export default Home;

