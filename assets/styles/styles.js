import { StyleSheet } from "react-native";


export default StyleSheet.create({

    // Tracking
    header: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    clothesName:{
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',

    },
    clothesID: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#5E5E5E'        
    },
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
        top: -10,
        left: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    shirts: {
        position: "absolute",
        top: 360,
        left: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    pants: {
        position: "absolute",
        marginTop: 450,
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
        width: 137,
        height: 126,
        alignSelf: "center",
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    leastUseList:{
        position: "absolute",
        top: 150,
        left: 3,
        flex: 1
    },
    shirtsList:{
        position: "absolute",
        top: 390,
        left: 3,
    },
    pantsList:{
        position: "absolute",
        top: 480,
        left: 3,


    },
    listCounter:{
        position: "absolute",
        top: 10,
        left: 14,
        borderRadius: 3,
        backgroundColor: "#91C8FF",
        // overflow hides all behind the border
        overflow: 'hidden'
    },
    selectedID: {
        fontSize: 20,
        position: 'absolute',
        top: 25,
        left: 20,
        color: 'white',
        backgroundColor: '#8BD5FF',
        width: 85,
        borderRadius: 20,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        overflow: 'hidden'
    },
    donateModalContainer:{
        justifyContent: "center",
        height: "60%",
        marginTop: 'auto',
        backgroundColor: "white", 
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 2,
        shadowRadius: 3,

    },
    trackingModalExit:{
        height: 39,
        width: 39,
    },
    modalClothesImage:{
        width: '100%',
        height: 352,    
        top: -28,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    modalCountText:{        
        fontSize: 30,
        bottom: 95,
    },
    modalCount:{
    
        right: 30,
        fontSize: 30,
        bottom: 95,
        

    },
    modalCategory:{    
        color: "#91C8FF",
        fontSize: 30,
        bottom: 135,


    },
    modalName:{
        fontSize: 25,
        fontWeight: 'bold', // Use a numeric value or remove this line
        alignSelf: 'center',
        top: -19,
        textAlign: 'center',
        
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
        backgroundColor: "#D9D9D9",
        width: "100%",
        height: 409,
        justifyContent: 'center'
    },
    addImage: {
        width: 193,
        height: 56,
        alignSelf: 'center'
    },
    scanAndWriteContainer:{
        height: 443,
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
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
        fontSize: 20, 
        left: 23,
        top: 37,
        fontWeight: 'bold'
    },
    writeToNfcButtonText:{
        color: "white",
        fontSize: 16,
        alignSelf: "center",
        fontFamily:"Inter",
        fontWeight: '400'
    },
    writeToNfcDoneButton:{
        width: 343,
        alignSelf: "center",
        height: 58,
        borderStyle: "solid",
        borderRadius: "15%",
        borderColor: "#91C8FF",
        borderWidth: 1,
        backgroundColor: "#91C8FF",
        position: "absolute",
        bottom: -343,
        justifyContent: 'center'
    },
    writeNfcButtonInput:{
        color:"black",
        borderStyle: "solid",
        borderRadius: "15%",
        borderWidth: 1,
        position: "absolute",
        top: 148,
        alignSelf: "center",
        width: 343,
        height: 58,
        backgroundColor: 'white',
        paddingLeft: 10,
    },
    writeNfcButtonName:{
        color:"#91C8FF",
        fontSize: 30,
        textAlign: "left",
       
    },
    exitNFC: {
        width: 36,
        height: 36,
    },




    //Donate Styles
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
        top: 27,
        left: 18,
        width:360,
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        alignSelf: 'center'
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
        flexWrap: 'wrap',
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
    donateHeader: {
        fontSize: 25,
        fontWeight: 'bold'
    },
 
})