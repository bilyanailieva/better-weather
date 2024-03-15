import { makeAutoObservable } from 'mobx';

export default class RootStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  private _tab = '';

  public setActiveTab(tab: string) {
    this._tab = tab;
  }

  get activeTab() {
    return this._tab;
  }
}
