export default class CleverArray{
  constructor(...items){
    this.items = items;
  }

  get sum(){
    if(this.items.length){
      return this.items.reduce((accumulator, value) => accumulator + value, 0);
    }
  }

  push(...moreItems){
    this.items = this.items.concat(moreItems);
  }

  get average(){
    return this.sum / this.items.length;
  }
}
