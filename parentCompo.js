import { LightningElement,api } from 'lwc';

export default class ParentCompo extends LightningElement {
     progress=10
    
   
    CarosalDetails=[
        { 
               src:'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
               header:'First Card',
               description:'First card description'
        },
        {
               src:'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg',
               header:'Second Card',
               description:'Second card description'
        },
        {  
               src:'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg',
               header:'Third Card',
               description:'Third card description'
        }
    ]

    eventHandler(event){
     this.progress=event.target.value
    }
   
handleClick(){
    this.template.querySelector('c-calling-child-method-from-parent').resetslider();
}

}
