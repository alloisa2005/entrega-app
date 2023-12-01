import mongoose from 'mongoose';

const pruebaSchema = new mongoose.Schema({
    name: String,
    age: Number,
}, {timestamps: true});

const Prueba = mongoose.models.Prueba || mongoose.model('Prueba', pruebaSchema);

export default Prueba;