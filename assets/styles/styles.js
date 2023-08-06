import { StyleSheet } from "react-native";


export default StyleSheet.create({

    // Tracking
    container: {
        position: "relative",
        height: 125,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    search: {
        position: "absolute",
        right: 70,
        top: 80,
     
        width: 32,
        height: 32,
    },
    logoContainer: {
        left: 20,
        marginTop: 75,
        flex: 1,
        flexDirection: 'row'
    },
    profile: {
        position: "absolute",
        right: 30,
        bottom: 13,
        width: 32,
        height: 32,
    },
    leastused: {
        position: "absolute",
        top: -30,
        left: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    shirts: {
        position: "absolute",
        top: 400,
        left: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    pants: {
        position: "absolute",
        marginTop: 480,
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 20,
    },
    logo: {
        position: "absolute",
        left: 10,
        height: 52,
        width: 260,
        bottom: 7,
    },
    wrapButton:{
        position: "absolute",
        top: 250,
        left: 50,
        alignItems: 'center',
        marginHorizontal:50,
        padding:20,
        backgroundColor: 'orange',
    },
    txtFontSize:{
        fontSize:20,
    },
    item:{
        borderWidth:0.5,
        padding: 8,
        borderRadius:10,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#91C8FF"

       
        
    },

    image:{
        width: 80,
        height: 80,
    

    },
    imageLeastUse:{
        width: 140,
        height: 200,
        alignSelf: "center"
  
        
    },
    leastUseList:{
        position: "absolute",
        top: 170,
        left: 3,
        

    },
    shirtsList:{
        position: "absolute",
        top: 425,
        left: 3,

    },
    pantsList:{
        position: "absolute",
        top: 500,
        left: 3,


    },
    listCounter:{
        position: "absolute",
        top: 10,
        left: 14,
        borderStyle: "solid",
        borderColor: "#AFB1B6",
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: "#91C8FF",
        // overflow hides all behind the border
         overflow: 'hidden'


    },
    donateModalContainer:{
        justifyContent: "center",
        height: "50%",
        marginTop: 'auto',
        backgroundColor: "white", 
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 2,
        shadowRadius: 3,

    },
    trackingModalExit:{
        position: "absolute",
        top: 1,
        right: 1,
        height: 39,
        width: 39,
        backgroundColor:"#91C8FF",
        borderRadius: 35,
        alignSelf: "center"
        
        
        
    },
    modalClothesImage:{
        width: 300,
        height: 150,    
        position: "absolute",
        borderRadius: 30,
        top: 35,
    
        overflow: 'hidden',
        alignSelf: "center",
        backgroundColor: "#91C8FF",
        marginBottom: 40,
  
        
    },
    modalCountText:{
        position: "absolute",
        
        fontSize: 30,
        bottom: 95,
    


    },
    modalCount:{
        position: "absolute",
    
        right: 30,
        fontSize: 30,
        bottom: 95,
        

    },
    modalCategory:{
        position: "absolute",
    
        color: "#91C8FF",
        fontSize: 30,
        bottom: 135,


    },
    modalName:{
     
        fontSize: 50,
        fontWeight: 'bold', // Use a numeric value or remove this line
        alignSelf: "center",
        bottom: 95,
 
    },
    modalContents:{
        justifyContent: "center",
        height: "50%",
        marginTop: 'auto',
        backgroundColor:"white",
        borderRadius: 25,
     

    },
    modalDonateButton:{
        backgroundColor:"#91C8FF",
        alignSelf: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: "3%",
        width: "88%",
        height:50,
        txtFontSize: 20,
        position: "absolute",
        top: 140,
        textAlign: "center"
        
        
    },
    modalzDonateButtonText:{
        color: "black",
        textAlign: "center"
      
    },
    modalButton:{

        backgroundColor: "red",

        

    },
    
    //

    containerDonate: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDonate:{
        color: "red"
    },
    containerMaps: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
        zIndex:0,
        
      },
    mapOverlay:{
        position: 'absolute',
        bottom: 50,
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 5,
        padding: 16,
        left: "25%",
        width: "50%",
        textAlign: "center"
    },
    address:{
        color: "red",
         
        top: 100,
        fontSize: 90,
        
        
    },
    userLocation:{
        width:35,
        height: 35,

    },
    donateName:{
        fontSize: 40,
    },


    // Scan
    ScanContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2'
    },
    BottomTab:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    GraphicContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },  
    ScanGraphic: {
        height: 240,
        width: 311,
        marginTop: 62,
    },
    PhoneGraphic:{
        width: 100,
        height: 100,
        marginTop: 125,
    },
    Instructions: {
        textAlign: 'center',
        marginTop: 12,
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 290
    },
    Exit: {
        height: 28,
        width: 28,
        alignSelf: 'center',
        marginTop: 5
    },
    scanBackground:{
        backgroundColor: "#91C8FF",
        maxHeight: "100%",
        maxWidth: "100%",
        height: "100%",
        width: "100%",

    },
    scanAndWriteContainer:{
        backgroundColor: "white",
        height: "50%",
        width: "100%",
        position: "absolute",
        bottom: -10,
        borderRadius: "25%"


    },
 
    ScanTagText:{
        color:"#91C8FF",
        textAlign: "center",
        fontSize: 40,
        Top: 10,

    },
    scanNfcButtonText:{
        color: "#91C8FF",
        fontSize: 40,
        alignSelf: "center",
        top: 5,
        fontFamily: "Georgia"

        
    },
    scanNfcButton:{

        width: "88%",
        alignSelf: "center",
        borderStyle: "solid",
        borderRadius: "15%",
        borderColor:"#black" ,
        borderWidth: 1,
        height: 65,
        top: 1,
        
        
        

    },
    addTagText:{
        color:"#91C8FF",
        fontSize:20, 
        width: 300,
        alignSelf:"center",
        right: 40,
        position:"relative",
        top:15,
        fontFamily:"Georgia"

        

    },
    writeToNfcButtonText:{
        color: "#91C8FF",
        fontSize: 40,
        alignSelf: "center",
        fontFamily:"Georgia",
        position: "absolute",
        top: 10,

    },
    writeToNfcDoneButton:{
        width: "88%",
        alignSelf: "center",
        height: 70,
        borderStyle: "solid",
        borderRadius: "15%",
        borderColor: "black",
        borderWidth: 1,

        position: "absolute",
        bottom: -240,
        color:"#91C8FF",

        


    },
    writeNfcButtonInput:{
        color:"black",
        borderStyle: "solid",
        borderRadius: "15%",
        borderWidth: 1,

        position: "absolute",
        top: 80,
        alignSelf: "center",
        width: "88%",
        height: 60,
        fontFamily: "Georgia"

    
    },
    writeNfcButtonName:{
        color:"#91C8FF",
        fontSize: 30,
        textAlign: "center",
       
    },




    ///DOnate Styles
    donateContainer: {
        position: "relative",
        height: 125,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },


    donateLogoContainer: {
        left: 20,
        marginTop: 75,
        flex: 1,
        flexDirection: 'row'
    },
    donateLogo: {
        position: "absolute",
        left: 10,
        height: 52,
        width: 260,
        bottom: -20,
    },
    donateProfile: {
        position: "absolute",
        right: 30,
        bottom: -20,
        width: 32,
        height: 32,
    },
    


    leastUseDonateListContainer:{
 
    },
    leastUseDonateList:{
        height: 600,
        position: "absolute",
        top: 50,
        left: 18,
        width:360,
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    donateImages:{
        width: 95,
        height: 90,
        border: 1,
    },
    donateImagesConatiner:{
        borderWidth:0.5,
        padding: 8,
        borderRadius:10,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#91C8FF",
        borderBottomWidth: 1
        
    },
    donateClothesView:{
        flexWrap: 'wrap'
    },
    textAboveDonationListL:{
        backgroundColor:"#91C8FF",
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "Georgia",
        fontSize: 20,
        top: 35,

        width: "90%",

        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: "15%",
        overflow: 1,
    },
    donateModalClothesImage:{
        width: 300,
        height: 150,    
        position: "absolute",
        alignSelf: "center",
        borderRadius: 30,
        bottom: 10,
    
        overflow: 'hidden',
        alignSelf: "center",
        backgroundColor: "#91C8FF",
        marginBottom: 40,
  
        
    },
    donateModalExit:{
        position: "absolute",
        bottom:200,
        right: 1,
        height: 39,
        width: 39,
        backgroundColor:"#91C8FF",
        borderRadius: 35,
        alignSelf: "flex-end"
        
        
        
    },
    donateModalCountText:{
        position: "absolute",
        
        fontSize: 40,
        top:150,
    


    },
    donateModalCount:{
        position: "absolute",
    
        right: 30,
        fontSize: 40,
        top: 150,
        

    },
    donateModalCategory:{
        position: "absolute",
    
        color: "#91C8FF",
        fontSize: 40,
        top: 75,


    },
    donateModalName:{
     
        fontSize: 50,
        fontWeight: 'bold', // Use a numeric value or remove this line
        alignSelf: "center",
        top: 10,
 
    },
 
})
