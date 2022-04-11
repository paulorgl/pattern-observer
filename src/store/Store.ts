import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";

export class Store implements Subject {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Store: Observer has been attached already.");
    }

    console.log("Store: Attached an observer.");
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Store: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Store: Detached an observer.");
  }

   public notify(): void {
    console.log("Store: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public notifyObservers(): void {
    this.notify();
  }
}
