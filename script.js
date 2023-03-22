class Scroll {
    constructor(info) {
        if (typeof info.element == 'string') {
            this.el = document.querySelector(info.element);
        } else if (info.element instanceof HTMLElement) {
            this.el = info.element
        }

        this.el.style.position = 'fixed'
        this.range = info.top
        this.el.style.top = this.scrollUnit()
        this.unit = info.unit ?? '%'
        this.move()

        window.addEventListener('scroll', () => this.move())
        window.addEventListener('resize', () => this.move())
    }

    move() {

        this.scrollValue = this.scrollUnit()
        console.log(window.innerHeight);
        console.log(this.range);
        console.log(this.el.clientHeight);
        if (this.scrollValue - scrollY > 0) {
            this.el.style.top = this.scrollValue - scrollY + 'px'
        } else {
            this.el.style.top = 0
        }
    }
    scrollUnit() {
        if (this.unit == 'px') {
            return this.range >= 0 ? this.range : 0
        } else if (this.unit == '%') {
            return window.innerHeight / 100 * this.range - this.el.clientHeight
        }
    }

}


let myScroll = new Scroll(
    {
        element: '.header__nav',
        top: 0,
        // unit: 'px'
    }
)

// console.log(myScroll);



// class TextElement {
//     constructor(selector) {
//       this.element = document.querySelector(selector);
//       this.element.addEventListener('mouseover', this.handleMouseOver.bind(this));
//     }

//     handleMouseOver() {
//       const clonedText = this.element.cloneNode(true);
//       const x = Math.floor(Math.random() * window.innerWidth);
//       const y = Math.floor(Math.random() * window.innerHeight);
//       clonedText.style.position = 'absolute';
//       clonedText.style.left = `${x}px`;
//       clonedText.style.top = `${y}px`;
//       document.body.appendChild(clonedText);
//     }
//   }

//   const text = new TextElement('.header__content');


class TextMover {
    constructor(info) {
        this.textElement = document.querySelector(info);
        this.textElement.addEventListener('mouseover', () => this.moveText());
    }

    moveText() {
        const textElement = this.textElement;
        const textRect = textElement.getBoundingClientRect();
        const x = Math.random() * (window.innerWidth - textRect.width);
        const y = Math.random() * (window.innerHeight - textRect.height);
        textElement.style.position = 'absolute';
        textElement.style.left = `${x}px`;
        textElement.style.top = `${y}px`;
    }
}

const textMover = new TextMover('.header__content');