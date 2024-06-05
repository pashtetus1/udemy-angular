import {Injectable} from "@angular/core";

@Injectable()
export class CounterService{

  ActiveInactiveCounter: number;
  InactiveActiveCounter: number;
  CountActiveToInactive(){
    console.log('Active to Inactive Counter:' + ++this.ActiveInactiveCounter);
  }

  CountInactiveToActive(){
    console.log('Inactive to Active Counter:' + ++this.InactiveActiveCounter);
  }
}
