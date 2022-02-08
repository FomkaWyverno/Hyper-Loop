export class ElementPlace {
    constructor(htmlElement) {
        this.html = htmlElement;
        this.pointX = Number(htmlElement.style.left.replace('px',''));
        this.pointY = Number(htmlElement.style.top.replace('px',''));

        this.justNowX = undefined;
        this.justNowY = undefined;

        this.isVisible = false;
    }
}