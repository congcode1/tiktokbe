import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

import Inc from 'mongoose-sequence';
const AutoIncrement = Inc(mongoose);

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Account = new Schema(
    {
        _id: Number,
        isExternal: Boolean,
        avatar: String,
        username: String,
        password: String,
        name: String,
        followCount: Number,
        likeCount: Number,
        description: String,
        listFollowID: Array,
        createdAt: Date,
        updatedAt: Date,
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

Account.plugin(AutoIncrement);
Account.plugin(mongooseDelete, { deletedAt: true });

export default mongoose.model('Account', Account);
