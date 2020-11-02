const TyperWriter = function(txtElement, words, waitTime = 2500){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(waitTime,10);
    this.type();
    this.isDeleting = false;
}

TyperWriter.prototype.type = function(){
    
    const currentIndex = this.wordIndex % this.words.length;
    const currentWord = this.words[currentIndex];

    if(this.isDeleting){
        this.txt = currentWord.substring(0, this.txt.length - 1);
    }else{
        this.txt = currentWord.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //time speed
    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed = typeSpeed / 2;
    }

    if(!this.isDeleting && this.txt === currentWord){
        typeSpeed = this.wait;

        this.isDeleting = true;

    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;

        typeSpeed = 500;
    }
    setTimeout(()=> this.type(), typeSpeed)
}

//writing
document.addEventListener('DOMContentLoaded', init);

//
function init(){
    const txtElement = document.querySelector('.home-subtitle');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const waitTime = txtElement.getAttribute('data-wait');

    new TyperWriter(txtElement, words, waitTime);
}