import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[app-dropdown]',
    exportAs: 'appDropDown'
})
export class AppDropDownDirective {
    constructor(private eRef: ElementRef) {}
    @HostBinding('class.show') isOpen = false;
    @HostListener('click') onclick() {
        return this.isOpen = !this.isOpen;
    }
    @HostListener('document:click', ['$event'])
    clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
        this.isOpen = true;
    } else {
        this.isOpen = false;
    }
  }
}
