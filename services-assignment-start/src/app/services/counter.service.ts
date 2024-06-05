import {Injectable} from "@angular/core";

@Injectable()
export class CounterService{

  ActiveInactiveCounter: number = 0;
  InactiveActiveCounter: number = 0;
  CountActiveToInactive(){
    console.log('Active to Inactive Counter:' + ++this.ActiveInactiveCounter);
  }

  CountInactiveToActive(){
    console.log('Inactive to Active Counter:' + ++this.InactiveActiveCounter);
  }
}
