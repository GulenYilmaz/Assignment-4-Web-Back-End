const compliment   =require('./db.json');

module.exports ={


getComplimet :(req,res)=>{
        res.status(200).send(compliment);
} ,





deleteComplimet:(req,res)=>{
     let  index=compliment.findIndex(compliment => compliment.id ===   +req.params.id);
        compliment.splice(index,"compliment");
        res.status(200).send(compliment);
} ,




addCompliment:(req,res)=>{
        let { id}=reg.body;
        let newComplimet ={
            id
        }
        compliment.push(newComplimet);
        id ++;
        res.status(200).send(compliment);

},



updateComplimet:(req,res)=>{
let{id}=req.params;
letidex=compliment.findIndex(element => element.id === +id);

if(compliment[index].rating){

    res.status(200).send('just find index ')
}else  {
    res.status(200).send('not find index')
}
}
    
}