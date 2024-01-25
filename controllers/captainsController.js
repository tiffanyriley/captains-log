const Log = require('../Models/captainsLog');

const logIndex = async (req, res) => {
    try {
        const data = await Log.find();
        console.log('Data:', data);
        res.render('Index', { logs: data });
    } catch (err) {
        console.error('Error retrieving logs:', err);
        res.status(500).send('Internal Server Error');
    }
};
const logCreate = async (req,res) => {
    if (req.body.isShipDamaged === 'on') {
        req.body.isShipDamaged = true
    } else {
        req.body.isShipDamaged = false
    }
    console.log(req.body)
    try{
        const result = await Log.create(req.body)
        console.log('data saved: ',result)
    }catch(err){
        console.log('error : ', err)
    }
    res.redirect('/logs')
};

const logShow = async (req,res) => {
    const data = await Log.findById(req.params.id)
    res.render('Show', {
        log: data
    })
}

const logEdit = async (req,res) => {
    const data = await Log.findById(req.params.id)
    res.render('Edit', {
        log: data
    })
}

const logUpdate = async (req, res) => {
    if (req.body.isShipDamaged === 'on') {
        req.body.isShipDamaged = true
    } else {
        req.body.isShipDamaged = false
    }
    await Log.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/logs/${req.params.id}`)
}

const logDelete = async (req,res) => {
    await Log.findByIdAndDelete(req.params.id)
    res.redirect(`/logs`)
}


module.exports = {
    logIndex,
    logShow, 
    logCreate, 
    logEdit,
    logUpdate,
    logDelete,
}