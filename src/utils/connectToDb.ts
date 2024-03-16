import mongoose from 'mongoose';
import config from '../../config/default';

export default async function connectToDb() {
    const dbUri = config.dbUri;
    try {
        await mongoose.connect(dbUri);
        console.log('Connected to the DB successfully!');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
        process.exit(1);
    }
}