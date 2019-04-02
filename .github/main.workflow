workflow "New workflow" {
  on = "push"
  resolves = ["npm run test"]
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "i"
}

action "npm run test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run test"
  needs = ["npm install"]
}
