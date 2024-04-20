# UNFI-solution
 A simple Magic Transporter API for transferring magic items via magic movers

## Prerequisites
you should have Node.js installed and npm on your computer;
you should install typescript as a dependency;
## Installation
first type ```git clone repo_url``` which is provided in the repo itself then
type ```npm install``` to download all the required dependencies
then execute ```npm run build:dev``` and ```npm run start``` commands to start the project

## Usage
To use the Magic Transporter API, you can make requests to the `/magicItem` endpoint with a JSON payload containing the `name` and `weight` properties. For example:
```json
{
  "name": "magic wand",
  "weight": 30
}
