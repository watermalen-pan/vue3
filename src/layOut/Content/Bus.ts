// 订阅发布设计模式
type BusClass = {
  emit: (name: string) => void;
  on: (name: string, callBack: Function) => void;
};
type Pramskey = string | number | symbol;

type List = {
  [key: Pramskey]: Function[];
};

class Bus implements BusClass {
  list: List;
  constructor() {
    this.list = {};
  }

  emit(name: string, ...args: Array<any>) {
    let eventNumber: Array<Function> = this.list[name];
    eventNumber.forEach((fn) => {
      fn.apply(this, args);
    });
  }

  on(name: string, callBack: Function) {
    let fn: Array<Function> = this.list[name] || [];
    fn.push(callBack);
    this.list[name] = fn;
  }
}
