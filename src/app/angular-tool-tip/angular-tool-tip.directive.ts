import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAngularToolTip]'
})
export class AngularToolTipDirective {
  toolTip: string;
  position: string;
  bgColor: string;
  color: string;
  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
    this.renderer.addClass(this.el.nativeElement, 'toolTip');
    this.toolTip = this.el.nativeElement.getAttribute('aToolTip');
    this.position = this.el.nativeElement.getAttribute('aPosition');
    this.bgColor = this.el.nativeElement.getAttribute('aBgColor');
    this.color = this.el.nativeElement.getAttribute('aColor');
  }

  ngAfterViewInit() {
    this.el.nativeElement.insertAdjacentHTML('beforeend', '<span class="toolTipText">'+this.toolTip+'</span>');
    console.log(this.el.nativeElement.querySelector('.toolTipText'));
    this.renderer.setStyle(
        this.el.nativeElement.querySelector('.toolTipText'),
        'visibility',
        'hidden'
    );
  }

}
