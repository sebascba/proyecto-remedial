var verbos = [
    
    {"nombre":"abide by",	"significado":"aceptar u obedecer un acuerdo, decisión o norma",	"ejemplo":"we have to abide by what the court says."},
    {"nombre":"account for",	"significado":"explicar la razón de algo o la causa de algo",	"ejemplo":"they had to account for all the money that had gone missing."},
    {"nombre":"account for",	"significado":"formar el total de algo",	"ejemplo":"students account for the vast majority of our customers."},
    {"nombre":"ache for",	"significado":"Querer mucho algo.",	"ejemplo":"he was lonely and aching for love."},
    {"nombre":"ache for",	"significado":"Querer mucho a alguien.",	"ejemplo":"my partner's been away for a fortnight- i am aching for her."},
    {"nombre":"act on",	"significado":"hacer algo porque te han dado información, consejos u órdenes",	"ejemplo":"they never acted on the information they had."},
    {"nombre":"act on",	"significado":"afectar.",	"ejemplo":"the medicine only acts on infected tissue."},
    {"nombre":"act out",	"significado":"Representar algo con acciones y gestos.",	"ejemplo":"they acted out the story on stage."},
    {"nombre":"act out",	"significado":"hacer algo que has planeado o que antes sólo habías pensado hacer.",	"ejemplo":"just imagining these things is fine, as long as you don’t try to act them out."},
    {"nombre":"act out",	"significado":"expresar sus pensamientos o sentimientos a través de sus palabras o su comportamiento.",	"ejemplo":"he was acting out his feelings of inferiority by being overly aggressive."},
    {"nombre":"act up",	"significado":"Si una máquina o una parte del cuerpo se comporta mal, y funciona tan bien como debería.",	"ejemplo":"my computer's acting up; i think it might have a virus."},
    {"nombre":"act upon",	"significado":"Tomar medidas a causa de algo como la información recibida.",	"ejemplo":"the police were acting upon a tipoff."},
    {"nombre":"act upon",	"significado":"activarse.",	"ejemplo":"her allergies acted up when she went hiking in the woods."},
    {"nombre":"add on",	"significado":"incluir una cosa o cantidad extra en algo.",	"ejemplo":"you have to add the vat on to the price they give."},
    {"nombre":"add on",	"significado":"construir una parte extra en un edificio.",	"ejemplo":"they refurbished the whole place and even added on."},
    {"nombre":"add up",	"significado":"calcular el total de varios números o cantidades.",	"ejemplo":"we added up the bill to check it was correct."},
    {"nombre":"add up",	"significado":"si un conjunto de hechos no cuadra, y no crees que sea correcto porque no coincide con otra información que ya tienes.",	"ejemplo":"she explained why the work wasn't ready, but her story doesn't add up."},
    {"nombre":"add up",	"significado":"aumentar gradualmente hasta llegar a una gran cantidad:",	"ejemplo":"the changes in air quality are small, but after a while they do add up and affect people's health."},
    {"nombre":"add up to",	"significado":"tener un resultado o efecto determinado:",	"ejemplo":"their proposals do not add up to any real help for the poor."},
    {"nombre":"add up to",	"significado":"Llegar a una cantidad o cifra determinada.",	"ejemplo":"the total costs add up to several million euros."},
    {"nombre":"agree with",	"significado":"pensar que algo es lo correcto",	"ejemplo":"i don’t agree with corporal punishment in schools."},
    {"nombre":"agree with",	"significado":"Si una situación o unas nuevas condiciones te sientan bien, te hacen sentir sano y feliz:",	"ejemplo":"you look well - the mountain air must agree with you."},
    {"nombre":"agree with",	"significado":"Afectar: suele utilizarse en sentido negativo para mostrar que algo ha tenido un efecto negativo, especialmente si te hace sentir mal.",	"ejemplo":"i feel terrible- that food didn't agree with my stomach."},
    {"nombre":"aim at",	"significado":"Producir algo para un fin determinado o para un grupo de personas en particular:",	"ejemplo":"the magazine is aimed at teenagers."},
    {"nombre":"aim at",	"significado":"Tener la intención de conseguir algo.",	"ejemplo":"they're aiming at reducing costs by ten percent."},
    {"nombre":"allow for",	"significado":"tener en cuenta a alguien o algo cuando se planifica algo:",	"ejemplo":"we have to allow for the possibility of the project being delayed."},
    {"nombre":"allow of",	"significado":"Si una norma o situación permite algo, lo hace posible:",	"ejemplo":"the evidence allows of only one interpretation - he was murdered by his wife."},
    {"nombre":"angle for",	"significado":"Intentar conseguir algo indirectamente, insinuando o sugiriendo.",	"ejemplo":"he's been angling for an invitation, but i don't want him to come."},
    {"nombre":"answer back",	"significado":"Responder de forma grosera a alguien con autoridad. ",	"ejemplo":"her mother was shocked when she started answering her back and refusing to help."},
    {"nombre":"answer for",	"significado":"Ser responsable de algo malo, o ser castigado por algo:",	"ejemplo":"the government should be made to answer for their failure to sort out the problem."},
    {"nombre":"answer for",	"significado":"Hablar en nombre de alguien porque se le conoce.",	"ejemplo":"i can answer for my partner because i know her position on this issue."},
    {"nombre":"argue down",	"significado":"Ganar a alguien en un debate, discusión o alegato.",	"ejemplo":"the teacher tried to argue the girl down, but she couldn't."},
    {"nombre":"argue down",	"significado":"Persuadir a alguien para que baje el precio de algo que está vendiendo.",	"ejemplo":"she argued him down ten percent."},
    {"nombre":"argue down",	"significado":"Intentar persuadir a la gente para que no acepte una propuesta, moción, etc.",	"ejemplo":"they tried to argue down the proposal."},
    {"nombre":"argue out",	"significado":"Discutir algo y tomar una decisión final",	"ejemplo":"if we can't argue our differences out, we'll have to take them to court."},
    {"nombre":"ask about",	"significado":"Preguntar cómo le va a alguien, especialmente en lo profesional y en lo que respecta a la salud.",	"ejemplo":"tell your father i was asking about him"},
    {"nombre":"ask after",	"significado":"Preguntar por la salud de alguien, cómo le va la vida ",	"ejemplo":"enny rang earlier and asked after you, so i told her you were fine."},
    {"nombre":"ask around",	"significado":"Preguntar a varias personas para obtener información o ayuda:",	"ejemplo":"i have no idea, but i'll ask around at work and see if anyone can help."},
    {"nombre":"ask around ",	"significado":"Invitar a alguien.",	"ejemplo":"we asked them around for dinner."},
    {"nombre":"ask for",	"significado":"comportarse de una manera que hace probable que le ocurra una cosa desagradable en particular",	"ejemplo":"be asking for it: anyone who drives while they’re drunk is just asking for it."},
    {"nombre":"ask for",	"significado":"hablar o escribir a alguien porque quieres que te dé algo",	"ejemplo":"he’s always reluctant to ask for anyone’s help."},
    {"nombre":"ask for",	"significado":"se utiliza para enfatizar que algo es tan bueno que nada podría ser mejor",	"ejemplo":""},
    {"nombre":"ask in",	"significado":"invitar a alguien a entrar en un edificio o habitación, especialmente en tu casa",	"ejemplo":"mike is at the door. ask him in."},
    {"nombre":"ask out",	"significado":"invitar a alguien a una cita.",	"ejemplo":"he wanted to ask her out but was too shy."},
    {"nombre":"ask over",	"significado":"Invitar.",	"ejemplo":"they have asked us over for drinks on friday."},
    {"nombre":"ask round",	"significado":"Invitar a alguien.",	"ejemplo":"we asked john round for diner."},
    {"nombre":"auction off",	"significado":"Vender algo en una subasta.",	"ejemplo":"they auctioned off their property as they were heavily in debt."}

]

function buscador(){
    frasal=document.getElementById("buscar").value;
    // frasalSinEspacios = frasal.replace(/ /g, "");
    frasalSolo=verbos.filter((itme) => itme.nombre == frasal);
    console.log(frasalSolo);
    frasalSolo.forEach(function(x){
        // document.write(x.accountfor)
        // console.log(x.accountfor)
        hola = x.significado
        oe = x.ejemplo
    })

    let parrafo = document.createElement('p');
    let textoParrafo = document.createTextNode(hola);
    parrafo.appendChild(textoParrafo);
    document.getElementsByTagName('td')[0].appendChild(parrafo);

    let parrafo2 = document.createElement('p');
    let textoParrafo2 = document.createTextNode(oe);
    parrafo2.appendChild(textoParrafo2);
    document.getElementsByTagName('td')[1].appendChild(parrafo2);
}

// function buscador(){
//     var frasal = verbos.find(item => item.accountfor );
//     console.log(frasal);
//     document.write(frasal)
//     // getElementeById.(definicion).value = frasal;
// }