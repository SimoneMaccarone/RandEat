import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-return-home-btn',
  templateUrl: './return-home-btn.component.html',
  styleUrls: ['./return-home-btn.component.scss']
})
export class ReturnHomeBtnComponent {

    // RETURN HOME BUTTON
    showBackToTop = true ;
    scrollOffsetToShowButton = 200; // Imposta l'offset di scorrimento per mostrare il bottone

    constructor(){}


  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showBackToTop = (window.scrollY > this.scrollOffsetToShowButton);
  }

  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'  
    });
  }
}
