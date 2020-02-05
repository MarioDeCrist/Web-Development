export default class Timer{
  constructor (){
    this._running = false
    this._startTime = null
    this._stopTime = null
  }
  start(){if (this._running){
    return
  }
    
    this._startTime = new Date()
    this._running = true
    
  }
  stop (){
    if (!this._running){
      return
    }
    this._running = false
    this._startTime = null
    this._stopTime = null
  }
 reset(){
    this._running = false
    this._startTime = null
    this._stopTime = null
 }
 getElapsedTime(){
   if (this._startTime == null){
     return ['0','0']
   }
 else{
   elapsed = new Date() - this._startTime
 }
   let seconds = Math.floor(elapsed / 1000)
   const minutes = math.floor(seconds / 60000)
   return [minutes.toString(),(seconds % 60).toString()]
   
 }
}