const input = parseInt(prompt('Quante box vuoi visualizzare?'))

const containerDom = document.getElementById('container');

for (let i = 1; i<=input; i++) {
    const addBox = document.createElement('div')
    
    addBox.className = "box";
    containerDom.append(addBox);
    
    
    if (i % 3 == 0 && i % 5 == 0) {
            addBox.classList.add('buzzfizz')
            addBox.append('BuzzFizz')
        } else if (i % 3 == 0) {
            addBox.classList.add('fizz');  
            addBox.append('Fizz') 
        } else if (i % 5 == 0) {
            addBox.classList.add('buzz')
            addBox.append('Buzz')
        }  else {
            addBox.append(i)
    }

    
}