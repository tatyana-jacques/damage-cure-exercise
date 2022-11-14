class Character {

    constructor(name) {
        this.name = name
        this.life = 100
    }

    damage(damage) {
        this.life = this.life - damage
        if ((this.life - damage)<0)
        this.life=0

        return parseInt(this.life)
    }

    medKit() {

        if (this.life >= 90)
            this.life = 100
        else
            this.life = this.life + 10
        return this.life
    }

}

const wizard = new Character()
const wizardName = document.getElementById("name")

sendName.addEventListener("click", newName)
charDamage.addEventListener("click", lifeDamage)
charCure.addEventListener("click", cure)


function newName() {
    wizard.name = wizardName.value
    paragraph.innerText = (`Your character name is ${wizard.name} and his life is ${wizard.life}.`)

}

function lifeDamage() {
    wizard.life = wizard.damage(10)
    paragraph.innerText = (`Your character name is ${wizard.name} and his life is ${wizard.life}.`)
}

function cure() {
    wizard.life = wizard.medKit()
    paragraph.innerText = (`Your character name is ${wizard.name} and his life is ${wizard.life}.`)
}
