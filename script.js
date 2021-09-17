/**
 * @type {HTMLDivElement}
 */
let close = document.querySelector (".window .close");
if (close) {
    /**
     * 
     * @param {MouseEvent} e 
     */
    close.onclick = function (e) {
        let window = e.target.closest(".window");
        if (window) {
            window.remove();
        }
    }
}

        /**
 * @param {MouseEvent}
 */
    let head = document.querySelector(".window.head");
    if(head){
        let isMoving =false;
        
            let x=0, y=0;

        }
    


          /**
 * @param {MouseEvent} 
 */
head.onmousedown=function(e){
    isMoving =true;
    x = e.clientX;
    y = e.clientY;
}
    /** 
     * @param {MouseEvent}
 */
 head.onmouseup = function(e){
    isMoving =false;  
 }
 
 head.onmouseut = function(e){
    isMoving =false;  
 }
 /**
 * @param {MouseEvent}
 */
head.omnousemove = function(e){
    if(!isMoving) return;
   
    
    head.parentElement.style.top= ""+ (bound.top+(e.clientY-bound.top))+"px";
head.parentElement.style.left= ""+ (bound.left+(e.clientX-bound.left))+"px";
x = e.clientX;
    y = e.clientY;
}

