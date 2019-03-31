import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appImageUrlValidator]'
})
export class ImageUrlValidatorDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private form: NgForm
  ) { }

  @HostListener('input')
  validateImageUrl() {
    const element = this.el.nativeElement;
    if (this.form.controls.imageUrl.touched && element.value.length === 0) {
      this.renderer.setStyle(element, 'border-left', '5px solid #A94442');
      this.form.controls.imageUrl.setErrors({required: true});
    } else if (!element.value.startsWith('http') || (!element.value.endsWith('png') && !element.value.endsWith('jpg'))) {
      this.renderer.setStyle(element, 'border-left', '5px solid #A94442');
      this.form.controls.imageUrl.setErrors({invalidURL: true});
    } else {
      this.renderer.setStyle(element, 'border-left', '5px solid #42A948');
      this.form.controls.imageUrl.setErrors(null);
    }
  }
}
