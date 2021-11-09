class Wooram {
  name = 'haha';
  constructor(name) {
    console.log('created');
    this.name = name;
    this.age = 13;
    this.init();
  }
  init(){
    console.log('haha');
    this.haha()
  }
  haha(){
    console.log(this.name)
  }
}


class Wooram02 extends Wooram {
  constructor() {
    super();
    this.name = 'wooram020202'
  }
}

