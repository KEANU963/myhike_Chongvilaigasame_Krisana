function read_display_quote() {
    // console.log("inside function")

    // get into the right collection
    db.collection('quotes').doc('tuesday')                                              //name of the collection and documents should matach excatly with what you have in Firestore
    .onSnapshot(tuesdayDoc => {                                                         //arrow notation
        console.log("current document data: " + tuesdayDoc.data());                     //.data() returns data object
        document.getElementById('quote-goes-here').innerHTML=tuesdayDoc.data().quote;   //using javascript to display the data on the right place 
    })
}

read_display_quote();       //calling the funciton

function insertName(){
   // to check if the user is logged in:
   firebaseConfig.auth().onAuthStateChanged(user => {
    if (user){
        console.log(user.uid); //let me to know who is the user that logged in to get the UID
        currentUser = db.collection('users').doc(user.uid); // will go to the frstore and got to the doc of the user
        currentUser.get().then(userDoc => {
            // get the user name
            var userName = userDoc.data().name;
            console.log(userName);
            document.getElementById("name-goes-here").innerText=userName;
            $('#name-goes-here'.text(userName)); //jQuery
            // document.getElementByID()
        })
    }

    
   })
}

insertName();