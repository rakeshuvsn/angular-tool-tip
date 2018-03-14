import {Component, OnInit, ElementRef, Renderer2, HostListener} from '@angular/core';

@Component({
  selector: '.angularToolTip',
  templateUrl: './angular-tool-tip.component.html',
  styleUrls: ['./angular-tool-tip.component.scss']
})
export class AngularToolTipComponent implements OnInit {
  toolTip: string;
  position: string;
  bgColor: string;
  color: string;
  private positionClass: string = 'tooltiptext';
  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.displayToolTip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideToolTip();
  }

  ngOnInit() {
    this.el.nativeElement.style.position = 'relative';
    this.toolTip = this.el.nativeElement.getAttribute('aToolTip');
    this.position = this.el.nativeElement.getAttribute('aPosition');
    this.bgColor = this.el.nativeElement.getAttribute('aBgColor');
    this.color = this.el.nativeElement.getAttribute('aColor');

    const toolTipElement = this.el.nativeElement.querySelector('.tooltiptext');
    toolTipElement.style.backgroundColor = this.bgColor;
    console.log(toolTipElement.style);
    toolTipElement.style.color = this.color;
    if(this.position == 'right'){
      this.positionClass = 'tooltiptextRight';
      this.renderer.removeClass(toolTipElement, 'tooltiptext');
      this.renderer.addClass(toolTipElement, this.positionClass);
    }else if(this.position == 'top') {
      this.positionClass = 'tooltiptextTop';
      this.renderer.removeClass(toolTipElement, 'tooltiptext');
      this.renderer.addClass(toolTipElement, this.positionClass);
      console.log(toolTipElement);
    }else if(this.position == 'left'){
      this.positionClass = 'tooltiptextLeft';
      this.renderer.removeClass(toolTipElement, 'tooltiptext');
      this.renderer.addClass(toolTipElement, this.positionClass);
    }
  }

  private displayToolTip() {
    const toolTipElement = this.el.nativeElement.querySelector('.'+this.positionClass);
    toolTipElement.style.visibility = 'visible';
    toolTipElement.style.fontSize = '14px';
    toolTipElement.style.opacity = 0.8;
  }

  private hideToolTip() {
    this.el.nativeElement.querySelector('.'+this.positionClass).style.visibility = 'hidden';
    this.el.nativeElement.querySelector('.'+this.positionClass).style.opacity = 0;
  }

}
