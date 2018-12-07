class ResponseBuilder{
    constructor(){
        this.version = "1.0";
        this.response = {};
        this.shouldEndSession = true;
    }
    card(){
        let card = {
            "type": "Standard",
            "title": "Title of the card",
            "content": "Content of a simple card",
            "text": "Text content for a standard card",
            "image": {
              "smallImageUrl": "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
              "largeImageUrl": "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          }
          this.response.card=card;
          return this;
    }
    speak(ssmlObj){
        //dummy obj
        let  outputSpeech = {
            "type": "PlainText",
            "text": "Plain text string to speak",
            "ssml": "<speak>SSML text string to speak</speak>",
            "playBehavior": "REPLACE_ENQUEUED"      
          }
          this.response.outputSpeech = outputSpeech;
          return this;
    }
    dontEndSession(){
        this.shouldEndSession = false;
        return this;
    }
    buildResponse(){
        return {version:this.version,reponse:this.response,shouldEndSession:this.shouldEndSession}
    }
}
module.exports = ResponseBuilder;