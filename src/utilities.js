//Define Labelmap

const labelmap = {
    1:{name:'Hello', color:'red'},
    2:{name:'Fist', color:'green'},
}

export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i] > threshold){
                const [y,x,height,width] = boxes[i];
                const text = classes[i];


                ctx.strokeStyle = labelmap[text]['color']
                ctx.lineWidth = 20
                ctx.fillStyle = 'white'
                ctx.font = '30px Arial'


                ctx.beginPath()
                ctx.fillText(labelmap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
                ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5)
                ctx.stroke()
        }
    }


}