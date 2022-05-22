import mongoose from 'mongoose';

async function connectdb() {
    try {
        await mongoose.connect(
            'mongodb+srv://nxgthanhcongcommunity:7d42nVDzIuGjatIL@cluster0.5ratn.mongodb.net/Tiktok?retryWrites=true&w=majority',
        );
        console.log('connect db ok');
    } catch (err) {
        console.log('connect db fail');
    }
}

export { connectdb };
