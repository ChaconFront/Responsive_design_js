const d=document,
w=window;


export function responsiveMedia (id,mq,mobileContent,desktopContent) {
 let breakpoitnt= w.matchMedia(mq);

const responsive=(e)=>{

if (e.matches) {//este if nos va a estar evaluando la media query
//cuando la consulta se cumpla significa que su anchura por defecto es 1024px
    d.getElementById(id).innerHTML=desktopContent;
}else{
    d.getElementById(id).innerHTML=mobileContent;
}
//console.log("MQ",breakpoitnt,e.matches)
};

breakpoitnt.addListener(responsive)
//hay que ejecutarla directamente a la hora de que cargue el documento.
// y recuerda que esta funcion recibe la consulta de la mq
responsive(breakpoitnt); 
    
}