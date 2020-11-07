import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { PROMPTS } from './prompts';

class GamePlay extends Component {
    constructor(props) {
        super(props);
        this.nextBtn = this.nextBtn.bind(this);
        this.backBtn = this.backBtn.bind(this);
        this.toggleCorrect = this.toggleCorrect.bind(this);
        this.state = {
            prompts: PROMPTS,
            number: 0,
            disabled: true,
            isCorrectOpen: false,
            isFinishedOpen: false
        };
    }
    nextBtn() {

        var answer = this.state.prompts[this.state.number].userAnswer;
        var guess = this.state.prompts[this.state.number].guess;
        var tilesContainer1 = document.querySelector('.trythis');
        var tilesContainer2 = tilesContainer1.firstChild;
        var innerTiles = tilesContainer2.childNodes;
        alert(guess);
        alert(answer);
        if (guess = answer) {

            if (this.state.number < 2) {
                this.setState({
                    number: this.state.number + 1,
                    disabled: true,
                    isCorrectOpen: false
                })
                this.toggleCorrect();
                nextStage();
                

            }
            else {
                this.setState({
                    number: 0,
                    isFinishedOpen: false
                })

            }

        }
        else { alert('WRONG!'); }

        function nextStage() {
            var i;
            for (i = 0; i < answer.length - 1; i++) {
                innerTiles[i].nextSibling.innerHTML = '';
                tilesContainer2.firstChild.innerHTML = '';

            }
        }
    }
    enterLetters(n) {
        var answer = this.state.prompts[this.state.number].userAnswer;
        var total = this.state.prompts[this.state.number].total;
        var tilesContainer1 = document.querySelector('.trythis');
        var tilesContainer2 = tilesContainer1.firstChild;
        var innerTiles = tilesContainer2.childNodes;
        answer.push(n);
        if (answer.length >= total) {
            this.setState({
                disabled: false
            })

        }
        function addToTiles() {
            var i;
            for (i = 0; i < answer.length; i++) {
                innerTiles[i].innerHTML = answer[i];
            }
        }
        addToTiles();
    }
    backBtn() {
        var answer = this.state.prompts[this.state.number].userAnswer;
        answer.pop();
        var tilesContainer1 = document.querySelector('.trythis');
        var tilesContainer2 = tilesContainer1.firstChild;
        var innerTiles = tilesContainer2.childNodes;
        function subtractTile() {
            var i;
            for (i = 0; i < answer.length + 1; i++) {
                innerTiles[i].innerHTML = '';
            }
            for (i = 0; i < answer.length; i++) {
                innerTiles[i].innerHTML = answer[i];
            }
        }
        this.setState({
            disabled: true
        })
        subtractTile();
    }
    toggleFinished() {
        this.setState({
            isFinishedOpen: !this.state.isFinishedOpen
        });
    }
    toggleCorrect() {
        if (this.state.number < 2) {
            this.setState({
                isCorrectOpen: !this.state.isCorrectOpen
            });
        } else {
            this.toggleFinished();
        }
    }


    render() {

        return (
            <React.Fragment>
                <img src={this.state.prompts[this.state.number].image} width="300" alt="sad." />
                <div className="trythis">{this.state.prompts[this.state.number].tiles}</div>
                <div class="keyboard">
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('Q') }}>Q</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('W') }}>W</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('E') }}>E</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('R') }}>R</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('T') }}>T</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('Y') }}>Y</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('U') }}>U</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('I') }}>I</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('O') }}>O</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('P') }}>P</Button><br></br>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('A') }}>A</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('S') }}>S</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('D') }}>D</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('F') }}>F</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('G') }}>G</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('H') }}>H</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('J') }}>J</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('K') }}>K</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('L') }}>L</Button><br></br>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('Z') }}>Z</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('X') }}>X</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('C') }}>C</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('V') }}>V</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('B') }}>B</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('N') }}>N</Button>
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('M') }}>M</Button>
                </div>
                <Button className="moveBtn" onClick={this.backBtn}> BACK </Button>
                <Button className="moveBtn" disabled={this.state.disabled} onClick={this.nextBtn}> NEXT </Button>

                <Modal isOpen={this.state.isCorrectOpen} toggle={this.toggleCorrect}>
                    <ModalBody>
                        Great Job, You are Correct!
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.nextBtn} toggle={this.toggleCorrect}>Keep Going</Button>
                        <Button>Quit</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.isFinishedOpen} toggle={this.toggleFinished}>
                    <ModalBody>
                        Well Done You completed our Demo! Stay Tuned for the Real Game
                    </ModalBody>
                    <ModalFooter>
                        <Button toggle={this.toggleFinished}>Back Home!</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}
export default GamePlay;   