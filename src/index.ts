import { Client } from "./client/Client";
import { Store } from "./store/Store";

const store = new Store();
const client = new Client();
const otherClient = new Client();


store.attach(client);
store.attach(otherClient);

store.notifyObservers();


