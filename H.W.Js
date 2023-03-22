// let btn = document.querySelector('.header__content')



// class Mouse {
//     constructor(info) {
        
//         btn.addEventListener('mouseenter', (e) => {
            
//         })
        
//     }
    
    
// }

class TextElement {
    constructor(selector) {
      this.element = document.querySelector(selector);
      this.element.addEventListener('mouseover', this.handleMouseOver.bind(this));
    }
    
    handleMouseOver() {
      const clonedText = this.element.cloneNode(true);
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      clonedText.style.position = 'absolute';
      clonedText.style.left = `${x}px`;
      clonedText.style.top = `${y}px`;
      document.body.appendChild(clonedText);
    }
  }
  
  const text = new TextElement('.header__content');