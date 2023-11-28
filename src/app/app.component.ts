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

  // CAMBIO DI SFONDO
  // currentBackgroundIndex = 1;
  // totalBackgrounds = 4; // Cambia questo numero in base al numero di sfondi

  constructor(){}

  ngOnInit(): void {
  //   setInterval(() => {
  //     this.toggleBackground();
  //   }, 120000); // Esegui la funzione ogni 10 minuti (600000 millisecondi)
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  }


  // toggleBackground(): void {
  //   const body = document.querySelector('body') as HTMLElement;
  //   body.classList.remove(`change${this.currentBackgroundIndex}`);
  //   this.currentBackgroundIndex = (this.currentBackgroundIndex % this.totalBackgrounds) + 1;
  //   body.classList.add(`change${this.currentBackgroundIndex}`);
  // }



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
