import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'mathjax',
  templateUrl: './mathjax.component.html',
  styleUrls: ['./mathjax.component.scss']
})
export class MathjaxComponent implements OnInit, OnChanges {

  @Input() content:string | undefined = "";

  constructor(public gs:AppService) { }
  mathJaxObject: any; 
  ngOnChanges(changes: SimpleChanges) {
   if (changes['content']) {
      this.renderMath()
    }
  }
  
  renderMath(){

  this.mathJaxObject  = this.gs.nativeGlobal()['MathJax'] ;
  //setInterval(()=>{},1) 
  let angObj = this;
  setTimeout(()=>{
  angObj.mathJaxObject.Hub.Queue(["Typeset",angObj.mathJaxObject.Hub],'mathContent');

  },1000)
  } 
  loadMathConfig(){
    console.log("load config")

this.mathJaxObject  = this.gs.nativeGlobal()['MathJax'] ;
    this.mathJaxObject.Hub.Config({        
      showMathMenu: false,
      tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
      menuSettings: { zoom: "Double-Click",zscale: "150%" },
      CommonHTML: { linebreaks: { automatic: true } },
      "HTML-CSS": { linebreaks: { automatic: true } },
             SVG: { linebreaks: { automatic: true } }
    });
  } 

  ngOnInit(){

     this.loadMathConfig()
     this.renderMath();

  }

}
