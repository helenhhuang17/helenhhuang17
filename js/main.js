
// Firebase

var firebaseConfig = {
    apiKey: "AIzaSyCqo2wUZVFL05z1DKlLSJhS_jTaYZL0H-s",
    authDomain: "senior-thesis-study.firebaseapp.com",
    databaseURL: "https://senior-thesis-study-default-rtdb.firebaseio.com",
    projectId: "senior-thesis-study",
    storageBucket: "senior-thesis-study.appspot.com",
    messagingSenderId: "844135153791",
    appId: "1:844135153791:web:a405927e0bbf8c7f80ff4a",
    measurementId: "G-HGXV9H05JH"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

let rootRef = database.ref('users');


// Establish User Number
function setUserNumber() {
    let userNumber = parseInt(localStorage.getItem("userNumber"))
    userNumber += 1
    localStorage.setItem("userNumber", userNumber.toString())
    // rootRef.update({
    //     userNum: parseFloat(localStorage.userNumber),
    // })
}


// Establishing Group Number

function setGroup(clickedId) {
    localStorage.setItem("usergroup", clickedId)
}


// Establishing task number

function setTask(clickedId) {
    localStorage.setItem("task", clickedId)
}


// Establishing iteration number
// Initialize to 1 at the very beginning
function setIteration() {
    localStorage.setItem("iteration", "1")
}

// Increment with every condition you finish
function addIteration() {
    let number = parseInt(localStorage.getItem("iteration"))
    number += 1
    localStorage.setItem("iteration", number.toString())
}

// Update the Database
function training1() {
    rootRef.child(localStorage.userNumber).update({
        training_C1: parseFloat(localStorage.training_C1),
    })
}
function training2() {
    rootRef.child(localStorage.userNumber).update({
        training_C2: parseFloat(localStorage.training_C2),
    })
}
function training3() {
    rootRef.child(localStorage.userNumber).update({
        training_C3: parseFloat(localStorage.training_C3),
    })
}
function practice1T1C1() {
    rootRef.child(localStorage.userNumber).update({
        userGroup: localStorage.clickedId,
        practice_T1_C1_1: parseFloat(localStorage.practice_T1_C1_1),
        pscore_T1_C1_1: parseInt(localStorage.pscore_T1_C1_1),
        pnodes_T1_C1_1: parseInt(localStorage.pnodes_T1_C1_1),
        pzoom_T1_C1_1: localStorage.pzoom_T1_C1_1.split(" "),
        ppanCount_T1_C1_1: parseInt(localStorage.ppanCount_T1_C1_1)
    })
}
function practice2T1C1() {
    rootRef.child(localStorage.userNumber).update({
        practice_T1_C1_2: parseFloat(localStorage.practice_T1_C1_2),
        pscore_T1_C1_2: parseInt(localStorage.pscore_T1_C1_2),
        pnodes_T1_C1_2: parseInt(localStorage.pnodes_T1_C1_2),
        pzoom_T1_C1_2: localStorage.pzoom_T1_C1_2.split(" "),
        ppanCount_T1_C1_2: parseInt(localStorage.ppanCount_T1_C1_2)
    })
}
function official1T1C1() {
    rootRef.child(localStorage.userNumber).update({
        official_T1_C1_1: parseFloat(localStorage.official_T1_C1_1),
        oscore_T1_C1_1: parseInt(localStorage.oscore_T1_C1_1),
        onodes_T1_C1_1: parseInt(localStorage.onodes_T1_C1_1),
        ozoom_T1_C1_1: localStorage.ozoom_T1_C1_1.split(" "),
        opanCount_T1_C1_1: parseInt(localStorage.opanCount_T1_C1_1)
    })
}
function official2T1C1() {
    rootRef.child(localStorage.userNumber).update({
        official_T1_C1_2: parseFloat(localStorage.official_T1_C1_2),
        oscore_T1_C1_2: parseInt(localStorage.oscore_T1_C1_2),
        onodes_T1_C1_2: parseInt(localStorage.onodes_T1_C1_2),
        ozoom_T1_C1_2: localStorage.ozoom_T1_C1_2.split(" "),
        opanCount_T1_C1_2: parseInt(localStorage.opanCount_T1_C1_2)
    })
}
function practice1T1C2() {
    rootRef.child(localStorage.userNumber).update({
        practice_T1_C2_1: parseFloat(localStorage.practice_T1_C2_1),
        pscore_T1_C2_1: parseInt(localStorage.pscore_T1_C2_1),
        pnodes_T1_C2_1: parseInt(localStorage.pnodes_T1_C2_1),
        pzoom_T1_C2_1: localStorage.pzoom_T1_C2_1.split(" "),
        ppanCount_T1_C2_1: parseInt(localStorage.ppanCount_T1_C2_1),
        protateCount_T1_C2_1: parseInt(localStorage.protateCount_T1_C2_1)
    })
}
function practice2T1C2() {
    rootRef.child(localStorage.userNumber).update({
        practice_T1_C2_2: parseFloat(localStorage.practice_T1_C2_2),
        pscore_T1_C2_2: parseInt(localStorage.pscore_T1_C2_2),
        pnodes_T1_C2_2: parseInt(localStorage.pnodes_T1_C2_2),
        pzoom_T1_C2_2: localStorage.pzoom_T1_C2_2.split(" "),
        ppanCount_T1_C2_2: parseInt(localStorage.ppanCount_T1_C2_2),
        protateCount_T1_C2_2: parseInt(localStorage.protateCount_T1_C2_2)
    })
}
function official1T1C2() {
    rootRef.child(localStorage.userNumber).update({
        official_T1_C2_1: parseFloat(localStorage.official_T1_C2_1),
        oscore_T1_C2_1: parseInt(localStorage.oscore_T1_C2_1),
        onodes_T1_C2_1: parseInt(localStorage.onodes_T1_C2_1),
        ozoom_T1_C2_1: localStorage.ozoom_T1_C2_1.split(" "),
        opanCount_T1_C2_1: parseInt(localStorage.opanCount_T1_C2_1),
        orotateCount_T1_C2_1: parseInt(localStorage.orotateCount_T1_C2_1)
    })
}
function official2T1C2() {
    rootRef.child(localStorage.userNumber).update({
        official_T1_C2_2: parseFloat(localStorage.official_T1_C2_2),
        oscore_T1_C2_2: parseInt(localStorage.oscore_T1_C2_2),
        onodes_T1_C2_2: parseInt(localStorage.onodes_T1_C2_2),
        ozoom_T1_C2_2: localStorage.ozoom_T1_C2_2.split(" "),
        opanCount_T1_C2_2: parseInt(localStorage.opanCount_T1_C2_2),
        orotateCount_T1_C2_2: parseInt(localStorage.orotateCount_T1_C2_2)
    })
}
function practice1T1C3() {
    rootRef.child(localStorage.userNumber).update({
        practice_T1_C3_1: parseFloat(localStorage.practice_T1_C3_1),
        pscore_T1_C3_1: parseInt(localStorage.pscore_T1_C3_1),
        pnodes_T1_C3_1: parseInt(localStorage.pnodes_T1_C3_1),
        pzoom_T1_C3_1: localStorage.pzoom_T1_C3_1.split(" "),
        ppanCount_T1_C3_1: parseInt(localStorage.ppanCount_T1_C3_1),
        protate_T1_C3_1: localStorage.protate_T1_C3_1.split(" ")
    })
}
function practice2T1C3() {
    rootRef.child(localStorage.userNumber).update({
        practice_T1_C3_2: parseFloat(localStorage.practice_T1_C3_2),
        pscore_T1_C3_2: parseInt(localStorage.pscore_T1_C3_2),
        pnodes_T1_C3_2: parseInt(localStorage.pnodes_T1_C3_2),
        pzoom_T1_C3_2: localStorage.pzoom_T1_C3_2.split(" "),
        ppanCount_T1_C3_2: parseInt(localStorage.ppanCount_T1_C3_2),
        protate_T1_C3_2: localStorage.protate_T1_C3_2.split(" ")
    })
}
function official1T1C3() {
    rootRef.child(localStorage.userNumber).update({
        official_T1_C3_1: parseFloat(localStorage.official_T1_C3_1),
        oscore_T1_C3_1: parseInt(localStorage.oscore_T1_C3_1),
        onodes_T1_C3_1: parseInt(localStorage.onodes_T1_C3_1),
        ozoom_T1_C3_1: localStorage.ozoom_T1_C3_1.split(" "),
        opanCount_T1_C3_1: parseInt(localStorage.opanCount_T1_C3_1),
        orotate_T1_C3_1: localStorage.orotate_T1_C3_1.split(" ")
    })
}
function official2T1C3() {
    rootRef.child(localStorage.userNumber).update({
        official_T1_C3_2: parseFloat(localStorage.official_T1_C3_2),
        oscore_T1_C3_2: parseInt(localStorage.oscore_T1_C3_2),
        onodes_T1_C3_2: parseInt(localStorage.onodes_T1_C3_2),
        ozoom_T1_C3_2: localStorage.ozoom_T1_C3_2.split(" "),
        opanCount_T1_C3_2: parseInt(localStorage.opanCount_T1_C3_2),
        orotate_T1_C3_2: localStorage.orotate_T1_C3_2.split(" ")
    })
}

// Task 2
function practice1T2C1() {
    rootRef.child(localStorage.userNumber).update({
        practice_T2_C1_1: parseFloat(localStorage.practice_T2_C1_1),
        pscore_T2_C1_1: parseInt(localStorage.pscore_T2_C1_1),
        pzoom_T2_C1_1: localStorage.pzoom_T2_C1_1.split(" "),
        ppanCount_T2_C1_1: parseInt(localStorage.ppanCount_T2_C1_1)
    })
}
function practice2T2C1() {
    rootRef.child(localStorage.userNumber).update({
        practice_T2_C1_2: parseFloat(localStorage.practice_T2_C1_2),
        pscore_T2_C1_2: parseInt(localStorage.pscore_T2_C1_2),
        pzoom_T2_C1_2: localStorage.pzoom_T2_C1_2.split(" "),
        ppanCount_T2_C1_2: parseInt(localStorage.ppanCount_T2_C1_2)
    })
}
function official1T2C1() {
    rootRef.child(localStorage.userNumber).update({
        official_T2_C1_1: parseFloat(localStorage.official_T2_C1_1),
        oscore_T2_C1_1: parseInt(localStorage.oscore_T2_C1_1),
        ozoom_T2_C1_1: localStorage.ozoom_T2_C1_1.split(" "),
        opanCount_T2_C1_1: parseInt(localStorage.opanCount_T2_C1_1)
    })
}
function official2T2C1() {
    rootRef.child(localStorage.userNumber).update({
        official_T2_C1_2: parseFloat(localStorage.official_T2_C1_2),
        oscore_T2_C1_2: parseInt(localStorage.oscore_T2_C1_2),
        ozoom_T2_C1_2: localStorage.ozoom_T2_C1_2.split(" "),
        opanCount_T2_C1_2: parseInt(localStorage.opanCount_T2_C1_2)
    })
}
function practice1T2C2() {
    rootRef.child(localStorage.userNumber).update({
        practice_T2_C2_1: parseFloat(localStorage.practice_T2_C2_1),
        pscore_T2_C2_1: parseInt(localStorage.pscore_T2_C2_1),
        pzoom_T2_C2_1: localStorage.pzoom_T2_C2_1.split(" "),
        ppanCount_T2_C2_1: parseInt(localStorage.ppanCount_T2_C2_1),
        protateCount_T2_C2_1: parseInt(localStorage.protateCount_T2_C2_1)
    })
}
function practice2T2C2() {
    rootRef.child(localStorage.userNumber).update({
        practice_T2_C2_2: parseFloat(localStorage.practice_T2_C2_2),
        pscore_T2_C2_2: parseInt(localStorage.pscore_T2_C2_2),
        pzoom_T2_C2_2: localStorage.pzoom_T2_C2_2.split(" "),
        ppanCount_T2_C2_2: parseInt(localStorage.ppanCount_T2_C2_2),
        protateCount_T2_C2_2: parseInt(localStorage.protateCount_T2_C2_2)
    })
}
function official1T2C2() {
    rootRef.child(localStorage.userNumber).update({
        official_T2_C2_1: parseFloat(localStorage.official_T2_C2_1),
        oscore_T2_C2_1: parseInt(localStorage.oscore_T2_C2_1),
        ozoom_T2_C2_1: localStorage.ozoom_T2_C2_1.split(" "),
        opanCount_T2_C2_1: parseInt(localStorage.opanCount_T2_C2_1),
        orotateCount_T2_C2_1: parseInt(localStorage.orotateCount_T2_C2_1)
    })
}
function official2T2C2() {
    rootRef.child(localStorage.userNumber).update({
        official_T2_C2_2: parseFloat(localStorage.official_T2_C2_2),
        oscore_T2_C2_2: parseInt(localStorage.oscore_T2_C2_2),
        ozoom_T2_C2_2: localStorage.ozoom_T2_C2_2.split(" "),
        opanCount_T2_C2_2: parseInt(localStorage.opanCount_T2_C2_2),
        orotateCount_T2_C2_2: parseInt(localStorage.orotateCount_T2_C2_2)
    })
}
function practice1T2C3() {
    rootRef.child(localStorage.userNumber).update({
        practice_T2_C3_1: parseFloat(localStorage.practice_T2_C3_1),
        pscore_T2_C3_1: parseInt(localStorage.pscore_T2_C3_1),
        pzoom_T2_C3_1: localStorage.pzoom_T2_C3_1.split(" "),
        ppanCount_T2_C3_1: parseInt(localStorage.ppanCount_T2_C3_1),
        protate_T2_C3_1: localStorage.protate_T2_C3_1.split(" ")
    })
}
function practice2T2C3() {
    rootRef.child(localStorage.userNumber).update({
        practice_T2_C3_2: parseFloat(localStorage.practice_T2_C3_2),
        pscore_T2_C3_2: parseInt(localStorage.pscore_T2_C3_2),
        pzoom_T2_C3_2: localStorage.pzoom_T2_C3_2.split(" "),
        ppanCount_T2_C3_2: parseInt(localStorage.ppanCount_T2_C3_2),
        protate_T2_C3_2: localStorage.protate_T2_C3_2.split(" ")
    })
}
function official1T2C3() {
    rootRef.child(localStorage.userNumber).update({
        official_T2_C3_1: parseFloat(localStorage.official_T2_C3_1),
        oscore_T2_C3_1: parseInt(localStorage.oscore_T2_C3_1),
        ozoom_T2_C3_1: localStorage.ozoom_T2_C3_1.split(" "),
        opanCount_T2_C3_1: parseInt(localStorage.opanCount_T2_C3_1),
        orotate_T2_C3_1: localStorage.orotate_T2_C3_1.split(" ")
    })
}
function official2T2C3() {
    rootRef.child(localStorage.userNumber).update({
        official_T2_C3_2: parseFloat(localStorage.official_T2_C3_2),
        oscore_T2_C3_2: parseInt(localStorage.oscore_T2_C3_2),
        ozoom_T2_C3_2: localStorage.ozoom_T2_C3_2.split(" "),
        opanCount_T2_C3_2: parseInt(localStorage.opanCount_T2_C3_2),
        orotate_T2_C3_2: localStorage.orotate_T2_C3_2.split(" ")
    })
}

// Task 3
function practice1T3C1() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        practice_T3_C1_1: parseFloat(localStorage.practice_T3_C1_1),
        pscore_T3_C1_1: parseInt(localStorage.pscore_T3_C1_1),
        pnodes_T3_C1_1: parseInt(localStorage.pnodes_T3_C1_1),
        pzoom_T3_C1_1: localStorage.pzoom_T3_C1_1.split(" "),
        ppanCount_T3_C1_1: parseInt(localStorage.ppanCount_T3_C1_1)
    })
}
function practice2T3C1() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        practice_T3_C1_2: parseFloat(localStorage.practice_T3_C1_2),
        pscore_T3_C1_2: parseInt(localStorage.pscore_T3_C1_2),
        pnodes_T3_C1_2: parseInt(localStorage.pnodes_T3_C1_2),
        pzoom_T3_C1_2: localStorage.pzoom_T3_C1_2.split(" "),
        ppanCount_T3_C1_2: parseInt(localStorage.ppanCount_T3_C1_2)
    })
}
function official1T3C1() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        official_T3_C1_1: parseFloat(localStorage.official_T3_C1_1),
        oscore_T3_C1_1: parseInt(localStorage.oscore_T3_C1_1),
        onodes_T3_C1_1: parseInt(localStorage.onodes_T3_C1_1),
        ozoom_T3_C1_1: localStorage.ozoom_T3_C1_1.split(" "),
        opanCount_T3_C1_1: parseInt(localStorage.opanCount_T3_C1_1)
    })
}
function official2T3C1() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        official_T3_C1_2: parseFloat(localStorage.official_T3_C1_2),
        oscore_T3_C1_2: parseInt(localStorage.oscore_T3_C1_2),
        onodes_T3_C1_2: parseInt(localStorage.onodes_T3_C1_2),
        ozoom_T3_C1_2: localStorage.ozoom_T3_C1_2.split(" "),
        opanCount_T3_C1_2: parseInt(localStorage.opanCount_T3_C1_2)
    })
}
function practice1T3C2() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        practice_T3_C2_1: parseFloat(localStorage.practice_T3_C2_1),
        pscore_T3_C2_1: parseInt(localStorage.pscore_T3_C2_1),
        pnodes_T3_C2_1: parseInt(localStorage.pnodes_T3_C2_1),
        pzoom_T3_C2_1: localStorage.pzoom_T3_C2_1.split(" "),
        ppanCount_T3_C2_1: parseInt(localStorage.ppanCount_T3_C2_1),
        protateCount_T3_C2_1: parseInt(localStorage.protateCount_T3_C2_1)
    })
}
function practice2T3C2() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        practice_T3_C2_2: parseFloat(localStorage.practice_T3_C2_2),
        pscore_T3_C2_2: parseInt(localStorage.pscore_T3_C2_2),
        pnodes_T3_C2_2: parseInt(localStorage.pnodes_T3_C2_2),
        pzoom_T3_C2_2: localStorage.pzoom_T3_C2_2.split(" "),
        ppanCount_T3_C2_2: parseInt(localStorage.ppanCount_T3_C2_2),
        protateCount_T3_C2_2: parseInt(localStorage.protateCount_T3_C2_2)
    })
}
function official1T3C2() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        official_T3_C2_1: parseFloat(localStorage.official_T3_C2_1),
        oscore_T3_C2_1: parseInt(localStorage.oscore_T3_C2_1),
        onodes_T3_C2_1: parseInt(localStorage.onodes_T3_C2_1),
        ozoom_T3_C2_1: localStorage.ozoom_T3_C2_1.split(" "),
        opanCount_T3_C2_1: parseInt(localStorage.opanCount_T3_C2_1),
        orotateCount_T3_C2_1: parseInt(localStorage.orotateCount_T3_C2_1)
    })
}
function official2T3C2() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        official_T3_C2_2: parseFloat(localStorage.official_T3_C2_2),
        oscore_T3_C2_2: parseInt(localStorage.oscore_T3_C2_2),
        onodes_T3_C2_2: parseInt(localStorage.onodes_T3_C2_2),
        ozoom_T3_C2_2: localStorage.ozoom_T3_C2_2.split(" "),
        opanCount_T3_C2_2: parseInt(localStorage.opanCount_T3_C2_2),
        orotateCount_T3_C2_2: parseInt(localStorage.orotateCount_T3_C2_2)
    })
}
function practice1T3C3() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        practice_T3_C3_1: parseFloat(localStorage.practice_T3_C3_1),
        pscore_T3_C3_1: parseInt(localStorage.pscore_T3_C3_1),
        pnodes_T3_C3_1: parseInt(localStorage.pnodes_T3_C3_1),
        pzoom_T3_C3_1: localStorage.pzoom_T3_C3_1.split(" "),
        ppanCount_T3_C3_1: parseInt(localStorage.ppanCount_T3_C3_1),
        protate_T3_C3_1: localStorage.protate_T3_C3_1.split(" ")
    })
}
function practice2T3C3() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        practice_T3_C3_2: parseFloat(localStorage.practice_T3_C3_2),
        pscore_T3_C3_2: parseInt(localStorage.pscore_T3_C3_2),
        pnodes_T3_C3_2: parseInt(localStorage.pnodes_T3_C3_2),
        pzoom_T3_C3_2: localStorage.pzoom_T3_C3_2.split(" "),
        ppanCount_T3_C3_2: parseInt(localStorage.ppanCount_T3_C3_2),
        protate_T3_C3_2: localStorage.protate_T3_C3_2.split(" ")
    })
}
function official1T3C3() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        official_T3_C3_1: parseFloat(localStorage.official_T3_C3_1),
        oscore_T3_C3_1: parseInt(localStorage.oscore_T3_C3_1),
        onodes_T3_C3_1: parseInt(localStorage.onodes_T3_C3_1),
        ozoom_T3_C3_1: localStorage.ozoom_T3_C3_1.split(" "),
        opanCount_T3_C3_1: parseInt(localStorage.opanCount_T3_C3_1),
        orotate_T3_C3_1: localStorage.orotate_T3_C3_1.split(" ")
    })
}
function official2T3C3() {
    // let autoId = rootRef.push().key
    rootRef.child(localStorage.userNumber).update({
        official_T3_C3_2: parseFloat(localStorage.official_T3_C3_2),
        oscore_T3_C3_2: parseInt(localStorage.oscore_T3_C3_2),
        onodes_T3_C3_2: parseInt(localStorage.onodes_T3_C3_2),
        ozoom_T3_C3_2: localStorage.ozoom_T3_C3_2.split(" "),
        opanCount_T3_C3_2: parseInt(localStorage.opanCount_T3_C3_2),
        orotate_T3_C3_2: localStorage.orotate_T3_C3_2.split(" ")
    })
}

// Task Survey

// function setResult(clickedId) {
//     localStorage.setItem("result", clickedId)
// }
//
// function surveyResult() {
//     switch(localStorage.task) {
//         case "1":
//             rootRef.child(localStorage.userNumber).update({
//                 T1survey: localStorage.result
//             })
//         case "2":
//             rootRef.child(localStorage.userNumber).update({
//                 T2survey: localStorage.result
//             })
//         case "3":
//             rootRef.child(localStorage.userNumber).update({
//                 T3survey: localStorage.result
//             })
//     }
// }


// Decide on page path

$(document).ready(function(){
    $("button").click(function(){
        switch (localStorage.task) {
            case "1":
                switch (localStorage.iteration) {
                    case "1":
                        localStorage.setItem("practice1", "../../data/T1C1practice1.json")
                        localStorage.setItem("practice2", "../../data/T1C1practice2.json")
                        localStorage.setItem("data1", "../../data/T1C1officialE.json")
                        localStorage.setItem("data2", "../../data/T1C1officialH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T1C1training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T1C2training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T1C3training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T1C4training.html");
                                break;
                        }
                        break;
                    case "2":
                        localStorage.setItem("practice1", "../../data/T1C2practice1.json")
                        localStorage.setItem("practice2", "../../data/T1C2practice2.json")
                        localStorage.setItem("data1", "../../data/T1C2officialE.json")
                        localStorage.setItem("data2", "../../data/T1C2officialH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T1C2training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T1C3training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T1C4training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T1C1training.html");
                                break;
                        }
                        break;
                    case "3":
                        localStorage.setItem("practice1", "../../data/T1C3practice1.json")
                        localStorage.setItem("practice2", "../../data/T1C3practice2.json")
                        localStorage.setItem("data1", "../../data/T1C3officialE.json")
                        localStorage.setItem("data2", "../../data/T1C3officialH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T1C3training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T1C4training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T1C1training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T1C2training.html");
                                break;
                        }
                        break;
                    case "4":
                        localStorage.setItem("practice1", "../../data/T1C4practice1.json")
                        localStorage.setItem("practice2", "../../data/T1C4practice2.json")
                        localStorage.setItem("data1", "../../data/T1C4officialE.json")
                        localStorage.setItem("data2", "../../data/T1C4officialH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T1C4training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T1C1training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T1C2training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T1C3training.html");
                                break;
                        }
                        break;
                    case "5":
                        $("#nextCondition").attr("href", "T1Results.html");
                        break;
                }
                break;


            case "2":
                switch (localStorage.iteration) {
                    case "1":
                        localStorage.setItem("practice1", "../../data/T2C1practice1.json")
                        localStorage.setItem("practice2", "../../data/T2C1practice2.json")
                        localStorage.setItem("data1", "../../data/T2C1officialE.json")
                        localStorage.setItem("data2", "../../data/T2C1officialH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T2C1training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T2C2training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T2C3training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T2C4training.html");
                                break;
                        }
                        break;
                    case "2":
                        localStorage.setItem("practice1", "../../data/T2C2practice1.json")
                        localStorage.setItem("practice2", "../../data/T2C2practice2.json")
                        localStorage.setItem("data1", "../../data/T2C2officialE.json")
                        localStorage.setItem("data2", "../../data/T2C2officialH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T2C2training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T2C3training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T2C4training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T2C1training.html");
                                break;
                        }
                        break;
                    case "3":
                        localStorage.setItem("practice1", "../../data/T2C3practice1.json")
                        localStorage.setItem("practice2", "../../data/T2C3practice2.json")
                        localStorage.setItem("data1", "../../data/T2C3officialE.json")
                        localStorage.setItem("data2", "../../data/T2C3officialH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T2C3training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T2C4training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T2C1training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T2C2training.html");
                                break;
                        }
                        break;
                    case "4":
                        localStorage.setItem("practice1", "../../data/T2C4practice1.json")
                        localStorage.setItem("practice2", "../../data/T2C4practice2.json")
                        localStorage.setItem("data1", "../../data/T2C4officialE.json")
                        localStorage.setItem("data2", "../../data/T2C4officialH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T2C4training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T2C1training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T2C2training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T2C3training.html");
                                break;
                        }
                        break;
                    case "5":
                        $("#nextCondition").attr("href", "T2Results.html");
                        break;
                }
                break;


            case "3":
                switch (localStorage.iteration) {
                    case "1":
                        localStorage.setItem("practice1", "../../data/T3C1practiceOrig1.json")
                        localStorage.setItem("practice2", "../../data/T3C1practiceOrig2.json")
                        localStorage.setItem("data1", "../../data/T3C1officialOrigE.json")
                        localStorage.setItem("data2", "../../data/T3C1officialOrigH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T3C1training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T3C2training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T3C3training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T3C4training.html");
                                break;
                        }
                        break;
                    case "2":
                        localStorage.setItem("practice1", "../../data/T3C2practiceOrig1.json")
                        localStorage.setItem("practice2", "../../data/T3C2practiceOrig2.json")
                        localStorage.setItem("data1", "../../data/T3C2officialOrigE.json")
                        localStorage.setItem("data2", "../../data/T3C2officialOrigH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T3C2training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T3C3training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T3C4training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T3C1training.html");
                                break;
                        }
                        break;
                    case "3":
                        localStorage.setItem("practice1", "../../data/T3C3practiceOrig1.json")
                        localStorage.setItem("practice2", "../../data/T3C3practiceOrig2.json")
                        localStorage.setItem("data1", "../../data/T3C3officialOrigE.json")
                        localStorage.setItem("data2", "../../data/T3C3officialOrigH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T3C3training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T3C4training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T3C1training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T3C2training.html");
                                break;
                        }
                        break;
                    case "4":
                        localStorage.setItem("practice1", "../../data/T3C4practiceOrig1.json")
                        localStorage.setItem("practice2", "../../data/T3C4practiceOrig2.json")
                        localStorage.setItem("data1", "../../data/T3C4officialOrigE.json")
                        localStorage.setItem("data2", "../../data/T3C4officialOrigH.json")
                        switch (localStorage.usergroup) {
                            case "1":
                                $("#nextCondition").attr("href", "T3C4training.html");
                                break;
                            case "2":
                                $("#nextCondition").attr("href", "T3C1training.html");
                                break;
                            case "3":
                                $("#nextCondition").attr("href", "T3C2training.html");
                                break;
                            case "4":
                                $("#nextCondition").attr("href", "T3C3training.html");
                                break;
                        }
                        break;
                    case "5":
                        $("#nextCondition").attr("href", "T3Results.html");
                        break;
                }
                break;
        }
    });
});

// Console log for testing purposes

console.log(localStorage)

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}