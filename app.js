// We want node app.js filename/url
if (process.argv.length != 3) {
  console.log("Usage: node app.js filename/url")
  return
}

const loc = process.argv[2]

if(loc.includes("http://") || loc.includes("https://")) {
  // We're provided a url
  var sightengine = require('sightengine')('1792035066', 'GmDTB4FekSixH8ad32xJ');
  sightengine.check(['celebrities']).set_url(loc).then(function(result) {
    let elon = false
    if (!result.hasOwnProperty("faces") || !result.faces.length || !result.faces.celebrity.length) {
      console.log("Not Elon")
      return
    }
    if (!result.faces[0].celebrity) {
      console.log("Not Elon")
      return
    }
    result.faces[0].celebrity.map((e) => {
      if (e.name == "Elon Musk") {elon = true}
    })

    if (elon) {
      console.log("Elon")
    } else {
      console.log("Not Elon")
    }
  }).catch(function(err) {
    console.log(err)
  });
} else {
  // We're provided a filepath
  var sightengine = require('sightengine')('1792035066', 'GmDTB4FekSixH8ad32xJ');
  sightengine.check(['celebrities']).set_file(loc).then(function(result) {
    let elon = false
    if (!result.hasOwnProperty("faces") || !result.faces.length || !result.faces.celebrity.length) {
      console.log("Not Elon")
      return
    }
    if (!result.faces[0].celebrity) {
      console.log("Not Elon")
      return
    }
    result.faces[0].celebrity.map((e) => {
      if (e.name == "Elon Musk") {elon = true}
    })
    if (elon) {
      console.log("Elon")
    } else {
      console.log("Not Elon")
    }
  }).catch(function(err) {
    console.log(err)
  });
}
