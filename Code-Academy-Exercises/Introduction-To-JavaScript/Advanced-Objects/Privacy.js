const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

// There is no build in privacy in JavaScript.  Convention is to add a preceeding underscore for values that shoudnt be changed. Getters and Setters are needed to prevent things from breaking.
