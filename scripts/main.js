function read_display_quote() {
    // console.log("inside function")

    // get into the right collection
    db.collection('quotes').doc('tuesday')                                              //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(tuesdayDoc => {                                                         //arrow notation
            console.log("current document data: " + tuesdayDoc.data());                     //.data() returns data object
            document.getElementById('quote-goes-here').innerHTML = tuesdayDoc.data().quote;   //using javascript to display the data on the right place 
        })
}

read_display_quote();       //calling the funciton


function insertName() {

    // give me access to login uid
    // to check if the user is logged in:
    firebase.auth().onAuthStateChanged(
        /*a way to write a function*/ // function(user){}
        /*another way to write a function*/ 
        user => {
            if (user){
                console.log(user.uid); // let me know who is the user that logged in to get the uid
                let currentUser = db.collection('users').doc(user.uid); //will go to the firestore and go to the document of the user
                currentUser.get().then(userDoc=>{
                    // get username
                    let userName = userDoc.data().name;
                    console.log(userName);
                    $('#name-goes-here').text(userName); //jQuery way
                    // document.getElementById('#name-goes-here').innerText=userName; ????????
                })
            
            }


        }
    );

}

insertName();  //calling the function
