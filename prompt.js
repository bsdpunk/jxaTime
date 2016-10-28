var app = Application.currentApplication()
app.includeStandardAdditions = true
text = "nothing"
what = "What are you doing?"
function prompt(text, defaultAnswer) {
      var options = { defaultAnswer: defaultAnswer || '' }
      try {
              return app.displayDialog(text, options).textReturned
            } catch (e) {
              return null
            }
}

prompt(what,text);
