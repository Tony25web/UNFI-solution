# UNFI-solution
 A simple Magic Transporter API for transferring magic items via magic movers

## Prerequisites
you should have Node.js installed and npm on your computer;
you should install typescript as a dependency;
## Installation
first type ```git clone repo_url``` which is provided here ```repo_url=https://github.com/Tony25web/UNFI-solution.git``` then
type ```npm install``` to download all the required dependencies
then execute ```npm run build:dev``` and ```npm run start``` commands to start the project

## Usage
To use the Magic Transporter API, you can make requests to the `/magicItem` endpoint with a JSON payload containing the `name` and `weight` properties. For example:
```json
{
  "name": "magic wand",
  "weight": 30
}

to see more implementation about the API there is a file called UNFI Solutions.postman_collection.json which is an exported collection that can be opened by postman itself
