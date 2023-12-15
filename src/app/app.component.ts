import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'randeat';


  // RETURN HOME BUTTON
  // showBackToTop = false;
  // scrollOffsetToShowButton = 200; // Imposta l'offset di scorrimento per mostrare il bottone

  constructor(){}

  ngOnInit(): void {

  }




  // @HostListener('window:scroll', [])
  //   onScroll(): void {
  //     this.showBackToTop = (window.scrollY > this.scrollOffsetToShowButton);
  //   }

  //   scrollToTop(): void {
  //     window.scroll({
  //       top: 0,
  //       left: 0,
  //       behavior: 'smooth'
  //     });
  //   }













}
