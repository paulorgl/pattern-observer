import { Client } from "./client/Client";
import { Store } from "./store/Store";

//create a new store
const store = new Store();

//create a new client
const client = new Client();

//create a otherClient
const otherClient = new Client();

//add client to list observables in store
store.attach(client);

//add other client to list observables in store
store.attach(otherClient);

//remove client in list observables in store
store.detach(client)
store.detach(otherClient)


//notifies all registered observers
store.businessLogic();


