import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";
import { Store } from "../store/Store";

export class Client implements Observer {
  constructor() {}
  public update(subject: Subject): void {
    if (subject instanceof Store) {
      console.log("Client: Recieve update!");
    }
  }
}
