var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var TimerComponent = (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.initTimer();
    };
    TimerComponent.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerComponent.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    TimerComponent.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerComponent.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerComponent.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerComponent.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    TimerComponent.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    return TimerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Number)
], TimerComponent.prototype, "timeInSeconds", void 0);
TimerComponent = __decorate([
    Component({
        selector: 'timer',
        templateUrl: 'timer.html'
    }),
    __metadata("design:paramtypes", [])
], TimerComponent);
export { TimerComponent };
//# sourceMappingURL=timer.js.map