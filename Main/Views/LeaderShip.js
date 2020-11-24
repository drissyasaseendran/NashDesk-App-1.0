import React from 'react';
import {styles} from '../Styles/leadershipStyles'
import {ScrollView ,TouchableOpacity,Title,Text,View,Image} from 'react-native';



function Leader (){

    return (
      <ScrollView>
      <View style={styles.header}></View>
      <View style={styles.canvasBody}>
             <View style={styles.leaderbody}>
                <View style={styles.leaderContent}>
                    <View style={styles.leaderContentFeild}>
                       <Image style={styles.leaderImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    </View>
                    <View style={styles.leaderContentFeild}>
                       <Text style={styles.leadername} >Jenifer Lopus</Text>
                    </View>
                    <View style={styles.leaderContentFeild}>
                        <Text style={styles.leadercount}>8</Text>
                    </View>
                </View>
                <View style={styles.leaderContent}>
                    <View style={styles.leaderContentFeild}>
                       <Image style={styles.leaderImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    </View>
                    <View style={styles.leaderContentFeild}>
                       <Text style={styles.leadername} >Jenifer Lopus</Text>
                    </View>
                    <View style={styles.leaderContentFeild}>
                        <Text style={styles.leadercount}>8</Text>
                    </View>
                </View>
                <View style={styles.leaderContent}>
                    <View style={styles.leaderContentFeild}>
                       <Image style={styles.leaderImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    </View>
                    <View style={styles.leaderContentFeild}>
                       <Text style={styles.leadername} >Jenifer Lopus</Text>
                    </View>
                    <View style={styles.leaderContentFeild}>
                        <Text style={styles.leadercount}>8</Text>
                    </View>
                </View>
            </View>
      </View>
      </ScrollView>
    );

}

export default Leader;
