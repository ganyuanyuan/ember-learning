import Component from '@ember/component';

export default Component.extend({
  inputName :'',
  isSignin : false,

  actions:{
    getInputValue(){
      this.set('inputName', this.value)
    },
    signIn(){
      this.set('isSignin', true);
    },
    signOut(){
      this.set('isSignin', false);
      this.set('inputName', '')
      this.set('value', '')
    }
  }
});
