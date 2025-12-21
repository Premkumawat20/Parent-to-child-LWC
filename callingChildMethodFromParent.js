import { LightningElement,api } from 'lwc';

export default class CallingChildMethodFromParent extends LightningElement {
     val=20
     handler(event){
        this.val=event.target.value
    }
  @api resetslider()
   {
    this.val=50
   }
 
}