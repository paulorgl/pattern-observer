import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";

export class Store implements Subject {
  //list of observer
  private observers: Observer[] = [];

  // add observer in list observers
  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Store: Observer has been attached already.");
    }

    console.log("Store: Attached an observer.");
    this.observers.push(observer);
  }

  //remove observer in list observers
  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Store: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Store: Detached an observer.");
  }

  //notify all observers
   public notify(): void {
    console.log("Store: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
  //any business login of store
  public businessLogic(): void {
    this.notify();
  }
}
