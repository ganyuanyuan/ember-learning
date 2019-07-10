import Component from '@ember/component';

export default Component.extend({
  count: 0,
  actions:{
    addOne(){
      this.set('count', this.count +1);
    },
    resetZero(){
      this.set('count', 0);
    }
  }
});
