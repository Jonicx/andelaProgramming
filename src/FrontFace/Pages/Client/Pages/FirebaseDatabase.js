import ContactUsUi from './ContactUsUi'
export const FirebaseDatabase =()=>{
   var Email,Name,Message

   var firebaseConfig = {
      apiKey: "AIzaSyAvZeUglcm3Z1HV0AHZ5I3fNzOU49tOBSw",
      authDomain: "fir-nowandend.firebaseapp.com",
      projectId: "fir-nowandend",
      storageBucket: "fir-nowandend.appspot.com",
      messagingSenderId: "432226208931",
      appId: "1:432226208931:web:1446d3fb355daf11148316"
    };  
    // Initialize Firebase
    var firebase;
    firebase.initializeApp(firebaseConfig);

      function Ready(){
       Name=document.getElementById('name').value;    
       Email=document.getElementById('name').value;
       Message=document.getElementById('name').value;
      }

   document.getElementById('Submit').onclick = function(){
      Ready();
      firebase.database().ref('Messages/'+Name).set({
         NameOfTheMessanger: Name,
         EmailOfTheMessanger: Email,
         MessageFromTheMessanger: Message
      });
   };
}