// 1.
// let arrayOfCustomers = [
//     {id: "205753031", name:"shmuel", phone:"0546074968", email:"shmuelmoche@gmail.com", balance:900000},
//     {id: "203243031", name:"yakov", phone:"0546164858", email:"yakovkasa@gmail.com", balance:870000},
//     {id: "205610031", name:"haim", phone:"0535173168", email:"haim91@gmail.com", balance:880000},
// ];
// console.log(arrayOfCustomers);

// 2.1
// function addCleint(newCleint){
//     arrayOfCustomers.push(newCleint);
// }
// addCleint({id:"379541201", name:"navad", phone:"0537961456", email:"nadavzaro@gmail.com", balance:890000});

// 2.2
// function getCleintById(id){
//     for(let i = 0; i <arrayOfCustomers.length; i++){
//         if(id == arrayOfCustomers[i].id){
//             return arrayOfCustomers[i];
//         }
//     }
// }
// getCleintById("205753031");

// 2.3
// function deleteCleintById(oldCustomer){
//     for(let i = 0; i <arrayOfCustomers.length; i++){
//         if(oldCustomer == arrayOfCustomers[i].id){
//             arrayOfCustomers.splice(i,1);
//         }
//     }
// }
// deleteCleintById("205753031");

// 2.4
// function withdrawMoney(customer, amount){
//     for(let i =0; i < customer; i++)
//     if(customer == arrayOfCustomers[i].id){
//         arrayOfCustomers[i].balance -= amount;
//         break;
//     }
// }
// withdrawMoney("205753031", 50000);

// 2.5
// function depositMoney(customer, amount){
//     for(let i =0; i < customer; i++)
//     if(customer == arrayOfCustomers[i].id){
//         arrayOfCustomers[i].balance += amount;
//         break;
//     }
// }
// depositMoney("205753031", 50000);
// 3.
// let arrayOfBlockedCustomers = [
//     {id: "205642031", name:"ezra", phone:"0546074968", email:"ezra93@gmail.com", balance:190},
//     {id: "203242121", name:"jakov", phone:"0546164858", email:"jakovkasa@gmail.com", balance:1000000},
//     {id: "205611121", name:"uri", phone:"0535173168", email:"uri91@gmail.com", balance:500},
// ];


// function BlockedCustomers(client) {
//     for(let i = 0; i < arrayOfBlockedCustomers.length; i++){
//         if(arrayOfBlockedCustomers[i].id == client.id){
//             return true;
//         }
//     }
//     return false;
// }

// 3.1
// function addClient(client) {
//     if (BlockedCustomers(client)) {
//         alert("You're blocked!");

//     } else {
//     arrayOfCustomers.push(client);
// }
// }
// addClient({ id: 987456791, name: "Lior", phone: "053494589", email: "lior@gmail.com", balance: 56000 });//new client
// console.log(arrayOfCustomers);

// 3.2
// function getClientById(client) {
//     if (BlockedCustomers(client)) {
//         alert("You're blocked!");

//     } else {
//         for (let i = 0; i < arrayOfCustomers.length; i++) {
//             if (client.id == arrayOfCustomers[i].id) {
//                 return arrayOfCustomers[i];
//             }
//         }
//     }
// }
// let result = getClientById( "203243031" );
// console.log(result);

// 3.3
// function deleteClient(client) {
//     if (BlockedCustomers(client)) {
//         alert("You're blocked!");

//     } else {
//         for (let i = 0; i < arrayOfCustomers.length; i++) {
//             if (client.id == arrayOfCustomers[i].id) {
//                 arrayOfCustomers.splice(i, 1);
//                 return arrayOfCustomers;
//             }
//         }
//     }
// }

// deleteClient(( { id: 987456791, name: "Lior", phone: "053494589", email: "lior@gmail.com", balance: 56000 }));
// console.log(bankCustomers);

// 3.4
// function depositMoney(client, deposit) {
//     if (BlockedCustomers(client)) {
//         alert("You're blocked!");

//     } else {
//         for (let i = 0; i < arrayOfCustomers.length; i++) {
//             if (arrayOfCustomers[i].id == client.id) {
//                 arrayOfCustomers[i].balance += deposit;
//                 return arrayOfCustomers[i];
//             }
//         }
//     }
// }
// let result = depositMoney( "203243031" , 500);
// console.log(result);

// 3.5
// function withdrawMoney(client, withdraw) {
//     if (BlockedCustomers(client)) {
//         alert("You're blocked!");
//     } else {
//         for (let i = 0; i < arrayOfCustomers.length; i++) {
//             if (arrayOfCustomers[i].id == client.id) {
//                 arrayOfCustomers[i].balance -= withdraw;
//                 return arrayOfCustomers[i];
//             }
//         }
//     }
// }
// let result = withdrawMoney("205610031", 700);
// console.log(result);

// task1
// function moreThan400() {
//     let arr = [];
//     for (let i = 0; i < bankCustomers.length; i++) {
//         if (bankCustomers[i].balance >= 400) {
//             arr.push(bankCustomers[i]);
//         }
//     }
//     return arr;
// }
// let result = moreThan400();
// console.log(result);



// task2
// function lessThan200() {
//     let arr = [];
//     for (let i = 0; i < arrayOfCustomers.length; i++) {
//         if (arrayOfCustomers[i].balance <= 200){
//             arr.push(arrayOfCustomers[i]);
//         }
//     }
//     return arr;
// }

// let result = lessThan200();
// console.log(result);

// task3
// function millionare() {
//     for (let i = 0; i < bankCustomers.length; i++) {
//         if (arrayOfCustomers[i].balance >= 1000000) {
//             return arrayOfCustomers[i];
//         }
//     }

// }

// let result = millionare();
// console.log("You're Our First Millionare", result);