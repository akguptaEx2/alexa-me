class ResponseBuilder{
    constructor(){
        this.version = "1.0";
        this.response = {};
        this.shouldEndSession = true;
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