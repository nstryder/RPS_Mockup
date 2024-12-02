let player = {
    _score: 0,
    get score() {
        return this._score;
    },
    set score(value) {
        this._score = value; 
        document.getElementById('score-player').textContent = value;
    }
}

let cpu = {
    _score: 0,
    get score() {
        return this._score;
    },
    set score(value) {
        this._score = value; 
        document.getElementById('score-cpu').textContent = value;
    }
}

let message = {
    _text: "",
    set text(value) {
        this._text = value;
        document.getElementById('msg').textContent = value;
    }
}

function choose(choice) {
    console.log(choice, "was chosen");
    let cpu_choice = cpu_choose();
    console.log("CPU chose", cpu_choice);
    flash(cpu_choice)
    let comparison = choice + cpu_choice;
    switch (comparison) {
        case 'rr':
        case 'pp':
        case 'ss':
            tie();
            break;
        case 'rs':
        case 'pr':
        case 'sp':
            win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose();
            break;
        }
    console.log("Score is now P:", player.score, "CPU:", cpu.score);
}

function cpu_choose() {
    choices = ['r', 'p', 's'];
    choice_idx = Math.floor(Math.random() * choices.length);
    choice = choices[choice_idx];
    return choice;
}

function flash(choice) {
    let id = "cpu-" + choice;
    let cpu_btn = document.getElementById(id)
    cpu_btn.classList.add("flash");
    setTimeout(function(){cpu_btn.classList.remove("flash")}, 200) 
}

function win() {
    console.log("Won");
    message.text = "You win!"
    player.score++;
}

function lose() {
    console.log("Lost");
    message.text = "You lost."
    cpu.score++;
}

function tie() {
    console.log("Tied");
    message.text = "Tied!";
}