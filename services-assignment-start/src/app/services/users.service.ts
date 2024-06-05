
import {EventEmitter, Injectable} from "@angular/core";
import {CounterService} from "./counter.service";

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private CounterService: CounterService) {

  }
  onSetToInactive(userName: string) {
    this.inactiveUsers.push(userName);
    this.removeItem(this.activeUsers, userName);
    this.CounterService.CountActiveToInactive();
  }

  onSetToActive(userName: string) {
    this.activeUsers.push(userName);
    this.removeItem(this.inactiveUsers, userName);
    this.CounterService.CountInactiveToActive();
  }

  private removeItem<T>(array: T[], item: T)
  {
    array.splice(array.indexOf(item,0), 1);
  }
}
