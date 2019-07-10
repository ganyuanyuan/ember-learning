import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      title:"This is a List of Students",
      students:[
        {name:'Bill Gates', major:'Computer Science'},
        {name:'Steve Jobs', major:'Computer Science'},
        {name:'Elon Musk', major:'Computer Science'}
      ]
    }
  }
});
